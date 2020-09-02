package main

import (
	"fmt"
	"github.com/gofiber/cors"
	"github.com/gofiber/fiber"
	"github.com/jung-kurt/gofpdf"
	"golang.org/x/text/language"
	"golang.org/x/text/message"
	"github.com/leekchan/accounting"
	"log"
	"os"
	"sync"
	"strconv"
	"strings"
    
)

var (
    mutex   sync.Mutex
)

const (
	bannerHt = 42.0
	xIndent  = 20.0
)

var (

	next   = 0.0

	gross_pay = 0.0

	gross_deductions = 0.0

	net_pay = 0.0

	
)

type NewSlip struct {
	Cname string `json:"cname"`
	Caddr string `json:"caddr"`

	Name       string `json:"fname"`
	ID         string `json:"idno"`
	KRA        string `json:"kra"`
	Position   string `json:"position"`
	Department string `json:"dpt"`
	Payroll    string `json:"payroll"`

	Paycode_e []string `json:"paycode_e"`
	Paycode_d []string `json:"paycode_d"`
	Paycode_t []string `json:"paycode_t"`

	Bank  string `json:"bank"`
	Acc   string `json:"acc"`
	Month string `json:"month"`
	Year  string `json:"year"`

	Amount_e []string `json:"amount_e"`
	Amount_d []string `json:"amount_d"`
	Amount_t []string `json:"amount_t"`
}

type Response struct {

	NewSlip NewSlip `json:"newSlip"`
}

func serveStatic(app *fiber.App) {

	app.Static("/", "./build")
	app.Static("/home", "./build")
	app.Static("/slips", "./slips")

	/**/
	app.Static("/app", "./build")
	app.Static("/pricing", "./build")
	app.Static("/batch", "./build")
	app.Static("/help", "./build")

	/**/
	app.Static("/terms", "./build")
	app.Static("/privacy", "./build")
	app.Static("/paye", "./build")
	app.Static("/nssf", "./build")
	app.Static("/nhif", "./build")

	

}

func setupRoutes(app *fiber.App) {

	app.Post("/api/v1/personalslip", personalSlip)

	app.Post("/api/v1/sendmail", sendmail)

}


func main() {

	//server
	app := fiber.New()

	//Handle Cors
	app.Use(cors.New())

	serveStatic(app)

	setupRoutes(app)


	port := os.Getenv("PORT")

	if port == "" {

		port = "5000"
		
	}

	log.Printf("Listening on port %s\n\n", port)

	app.Listen(port)

}


func personalSlip(c *fiber.Ctx) {

	p := new(NewSlip)
	var (
		P_E []string
		A_E []string
		P_D []string
		A_D []string
		P_T []string
		A_T []string
		slip_name string
	)


	// Bind data to p or log error
	if err := c.BodyParser(p); err != nil {
		log.Println(err)
		c.Status(500).Send("Failed")
		return
	}

	//Display File on Slip
	file, erra := c.FormFile("file")
	filename := file.Filename

	// Check for errors:
	if erra == nil {
		// Save file to root directory:
		c.SaveFile(file, fmt.Sprintf("./images/%s", file.Filename))

	} else {

		log.Println(erra)

	}

	//Problematic variables
	ID := c.FormValue("idno")
	Department := c.FormValue("idno")
	Name := c.FormValue("fname")

	p.ID = ID
	p.Department = Department
	p.Name = Name


	//Problematic array
	P_E = strings.Split(c.FormValue("paycode_e"), ",")
	A_E = strings.Split(c.FormValue("amount_e"), ",")
	P_D = strings.Split(c.FormValue("paycode_d"), ",")
	A_D = strings.Split(c.FormValue("amount_d"), ",")
	P_T = strings.Split(c.FormValue("paycode_t"), ",")
	A_T = strings.Split(c.FormValue("amount_t"), ",")

	

	pdf := gofpdf.New("P", "mm", "A4", "")

	w, _ := pdf.GetPageSize()
	pdf.AddPage()
	pdf.SetFont("arial", "B", 16)
	
	_, lineHt := pdf.GetFontSize()

	//go routines
	var wg sync.WaitGroup
	wg.Add(3)

	go blueBanner(w, pdf, &wg)
	go slipLogo(erra, filename, pdf, &wg)
	go slipAddress(w, p, pdf, &wg)
	
	wg.Wait()

	headerMonth(w, p, pdf)
	headerContent(p, pdf)

	

	//Paycodes Content
	payCodesTitle(pdf, xIndent*2.5, bannerHt+lineHt*10.5-2*lineHt*0.75, "Earnings")
	for i, _ := range P_E {

		payCodes(pdf, xIndent*2.5, bannerHt+lineHt*10.5+(2*float64(i))*lineHt*0.75, P_E[i], A_E[i])

		next = (2 * float64(i)) + 2.0

		var x float64

		x, err := strconv.ParseFloat(A_E[i], 64)

		if err == nil {

			gross_pay = gross_pay + float64(x)

		}

	}

	payCodesTotals(pdf, xIndent*2.5, bannerHt+lineHt*10.5+next*lineHt*0.75, "Gross Pay", fmt.Sprintf("%.2f", gross_pay))

	next = next + 2.0

	payCodesTitle(pdf, xIndent*2.5, bannerHt+lineHt*10.5+next*lineHt*0.75, "Deductions")
	next = next + 2.0

	for i, _ := range P_D {

		payCodes(pdf, xIndent*2.5, bannerHt+lineHt*10.5+(next)*lineHt*0.75, P_D[i], A_D[i])

		next = next + 2.0

		var x float64

		x, err := strconv.ParseFloat(A_D[i], 64)

		if err == nil {

			gross_deductions = gross_deductions + float64(x)

		}

	}

	payCodesTotals(pdf, xIndent*2.5, bannerHt+lineHt*10.5+next*lineHt*0.75, "Total Deductions", fmt.Sprintf("%.2f", gross_deductions))
	next = next + 2.0

	payCodesTitle(pdf, xIndent*2.5, bannerHt+lineHt*10.5+next*lineHt*0.75, "Tax Details")
	next = next + 2.0

	for i, _ := range P_T {

		payCodes(pdf, xIndent*2.5, bannerHt+lineHt*10.5+(next)*lineHt*0.75, P_T[i], A_T[i])

		next = next + 2.0

	}

	payCodesTotals(pdf, xIndent*2.5, bannerHt+lineHt*10.5+next*lineHt*0.75, "Netpay", fmt.Sprintf("%.2f", gross_pay-gross_deductions))

	next = next + 2.0

	//Footer Notes
	pdf.SetFont("arial", "", 12)
	pdf.SetTextColor(180, 180, 180)
	pdf.Text(xIndent, 290, "Signature:")
	//pdf.Line(43, 290, 105, 290)
	pdf.Text(w/2+xIndent/2, 290, "Bank:  "+p.Bank+" "+p.Acc)
	//pdf.Line(136, 290, w-xIndent, 290)
	//drawGrid(pdf)

	slip_name = "payslip_" + Name + "_" + p.Month + "_" + p.Year + ".pdf"
	err := pdf.OutputFileAndClose("./slips/"+ slip_name)

	//Clear Out Variables
	gross_pay = 0.0
	gross_deductions = 0.0
	net_pay = 0.0

	

	if err != nil {

		fmt.Println("error!")
		panic(err)

		c.Status(500).Send("Failed")

	}else{

		c.Send(slip_name)

	}


}


func blueBanner(w float64, pdf *gofpdf.Fpdf, wg *sync.WaitGroup){

	defer wg.Done()
	pdf.SetFillColor(0, 191, 255)
	pdf.Polygon([]gofpdf.PointType{
		{0, bannerHt},
		{w, bannerHt},
		{w, 2.125 * bannerHt},
		{0, 2.125 * bannerHt},
	}, "F")
	
}

func slipLogo(erra error, filename string, pdf *gofpdf.Fpdf, wg *sync.WaitGroup){

	defer wg.Done()
	if erra == nil {
		// Banner - Logo
		pdf.Image("images/" + filename, xIndent, 0+(bannerHt-(bannerHt/1.5))/2.0, 30, 0, false, "", 0, "")

	}
	
}

func slipAddress(w float64, p *NewSlip, pdf *gofpdf.Fpdf, wg *sync.WaitGroup){

	defer wg.Done()
	pdf.SetFont("arial", "", 12)
	pdf.SetTextColor(0, 0, 0)
	_, lineHt := pdf.GetFontSize()
	pdf.MoveTo(w-xIndent-124.0, (bannerHt-(lineHt*1.5*3.0))/2.0)
	pdf.MultiCell(124.0, lineHt*1.5, p.Cname+"\n"+p.Caddr, gofpdf.BorderNone, gofpdf.AlignRight, false)
	
}

func headerMonth(w float64, p *NewSlip, pdf *gofpdf.Fpdf){


	pdf.SetFont("arial", "", 16)
	pdf.SetTextColor(255, 255, 255)
	_, lineHt := pdf.GetFontSize()
	pdf.Text(w/3, bannerHt+lineHt*1.0, "PAYSLIP FOR "+p.Month+" "+p.Year)
	
}

func headerContent(p *NewSlip, pdf *gofpdf.Fpdf){

	
	_, lineHt := pdf.GetFontSize()
	summaryBlock(pdf, xIndent, bannerHt+lineHt*2.0, "Name", p.Name)
	summaryBlock(pdf, xIndent, bannerHt+lineHt*5.25, "ID No.", p.ID)
	summaryBlock(pdf, xIndent*4, bannerHt+lineHt*2.0, "Designation", p.Position)
	summaryBlock(pdf, xIndent*4, bannerHt+lineHt*5.25, "KRA PIN", p.KRA)
	summaryBlock(pdf, xIndent*8, bannerHt+lineHt*2.0, "Department", p.Department)
	summaryBlock(pdf, xIndent*8, bannerHt+lineHt*5.25, "Payroll No.", p.Payroll)
	
}

func summaryBlock(pdf *gofpdf.Fpdf, x, y float64, title string, data ...string) {


	pdf.SetFont("arial", "", 14)
	pdf.SetTextColor(255, 255, 255)
	_, lineHt := pdf.GetFontSize()
	y = y + lineHt
	pdf.Text(x, y, title)
	y = y + lineHt*.25
	pdf.SetTextColor(50, 50, 50)
	for _, str := range data {
		y = y + lineHt*1.25
		pdf.Text(x, y, str)
	}

	
	
}

func sendmail(c *fiber.Ctx) {

	mail_slip_name := c.FormValue("mail_slip_name")
	mail_send_name := c.FormValue("mail_send_name")
	mail_send_email := c.FormValue("mail_send_email")

	//Send Mail
	status, err := sendEmail(mail_slip_name, mail_send_name, mail_send_email)

	if err != nil {

		fmt.Println("error!")
		panic(err)
		c.Status(500).Send("Failed")

	}else{

		c.Send(status)

	}
	
}

func payCodes(pdf *gofpdf.Fpdf, x, y float64, paycode string, amount string) {

	w, _ := pdf.GetPageSize()
	pdf.SetFont("arial", "", 12)
	pdf.SetTextColor(50, 50, 50)
	_, lineHt := pdf.GetFontSize()
	y = y + lineHt
	pdf.Text(x, y, paycode)

	pdf.SetTextColor(50, 50, 50)
	f, _ := strconv.ParseFloat(amount, 64)

	ac := accounting.Accounting{Symbol: "", Precision: 2}
    amt := ac.FormatMoney(f)


	pdf.SetXY((w - xIndent*4),y-3.5)
	pdf.CellFormat(25, 1, amt, "0", 0, "TR", false, 0, "")

}

func payCodesTitle(pdf *gofpdf.Fpdf, x, y float64, paycode string) {

	//w, _:= pdf.GetPageSize()
	pdf.SetFont("arial", "", 12)
	pdf.SetTextColor(0, 191, 255)
	_, lineHt := pdf.GetFontSize()
	y = y + lineHt
	pdf.Text(x-10, y, paycode)

}

func payCodesTotals(pdf *gofpdf.Fpdf, x, y float64, paycode string, amount string) {

	w, _ := pdf.GetPageSize()
	pdf.SetFont("arial", "B", 12)
	pdf.SetTextColor(50, 50, 50)
	_, lineHt := pdf.GetFontSize()
	y = y + lineHt
	pdf.Text(x-10, y, paycode)
	
	pdf.SetTextColor(50, 50, 50)

	f, _ := strconv.ParseFloat(amount, 64)

	ac := accounting.Accounting{Symbol: "", Precision: 2}
    amt := ac.FormatMoney(f)

	pdf.SetXY((w - xIndent*4),y-3.5)
	pdf.CellFormat(25, 1, amt, "0", 0, "TR", false, 0, "")
	

}

func drawGrid(pdf *gofpdf.Fpdf) {
	w, h := pdf.GetPageSize()

	pdf.SetFont("arial", "", 12)
	pdf.SetTextColor(80, 80, 80)
	pdf.SetDrawColor(200, 200, 200)
	for x := 0.0; x < w; x = x + (w / 20.0) {
		pdf.SetTextColor(200, 200, 200)
		pdf.Line(x, 0, x, h)
		_, lineHt := pdf.GetFontSize()
		pdf.Text(x, lineHt, fmt.Sprintf("%d", int(x)))
	}
	for y := 0.0; y < h; y = y + (w / 20.0) {
		if y < bannerHt*.9 {
			pdf.SetTextColor(200, 200, 200)
		} else {
			pdf.SetTextColor(80, 80, 80)
		}
		pdf.Line(0, y, w, y)
		pdf.Text(0, y, fmt.Sprintf("%d", int(y)))
	}
}

func number_format(c string) string {

	d := message.NewPrinter(language.English)

	integer, err := d.Println(c)

	if err == nil {

		return strconv.Itoa(integer)
	}

	return strconv.Itoa(integer)

}
