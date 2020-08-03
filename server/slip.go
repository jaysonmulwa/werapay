package main

import (
	"fmt"
	"log"
	"github.com/jung-kurt/gofpdf"
	"github.com/gofiber/fiber"	
	"github.com/gofiber/cors"
	"github.com/jinzhu/gorm"
	
)

const (
	month = "JANUARY"
	year  = "2020"
)

const (
	bannerHt = 42.0
	xIndent  = 20.0
)

var (

	DBConn *gorm.DB

)


type NewSlip struct {

	Cname string `json:"cname"`
	Caddr string `json:"caddr"`
	
	Name string `json:"fname"`
	ID string `json:"idno"`
	KRA string `json:"kra"`
	Position string `json:"position"` 
	Department string `json:"dpt"`
	Payroll string `json:"payroll"`
	Paycode_e []string `json:"paycode_e"`
	Paycode_d []string `json:"paycode_d"`
	Paycode_t []string `json:"paycode_t"`
	
	Amount_e []string `json:"amount_e"`
	Amount_d []string `json:"amount_d"`
	Amount_t []string `json:"amount_t"`

}


type Response struct {
	
	NewSlip NewSlip `json:"newSlip"`

}


type LineItemsType struct {
	TypeName string

	Totals float64

	HasTotal bool

	items []LineItems
}

type LineItems struct {
	name   string
	amount float64
}



func setupRoutes(app *fiber.App){

	app.Post("/api/v1/personalslip", personalSlip)

	

}



func main() {

	//server

	app := fiber.New()

	//Handle Cors
	app.Use(cors.New())

	//app.Use(middleware.Helmet())


	setupRoutes(app)

	app.Listen(8000)


}

func personalSlip(c *fiber.Ctx){

	
	p := new(Response)

	// Bind data to p or log error
	if err := c.BodyParser(p); err != nil {
			log.Println(err)
			c.Status(500).Send("Failed")
			return
	}


	log.Println(p)
	fmt.Println(p.NewSlip)


	

	earnings := []LineItemsType{

		LineItemsType{

			TypeName: "Earnings",

			Totals: 0.0,

			HasTotal: true,

			items: []LineItems{

				LineItems{

					name: "Basic Pay",

					amount: 100.0,
				},

				LineItems{

					name: "Commuter Allowance",

					amount: 100.0,
				},
			},
		},
		LineItemsType{

			TypeName: "Earnings",

			Totals: 0.0,

			HasTotal: true,

			items: []LineItems{

				LineItems{

					name: "Basic Pay",

					amount: 100.0,
				},

				LineItems{

					name: "Commuter Allowance",

					amount: 100.0,
				},
			},
		},
	}

	deductions := LineItemsType{

		TypeName: "Deductions",

		Totals: 0.0,

		HasTotal: true,

		items: []LineItems{

			LineItems{

				name: "NHIF",

				amount: 100.0,
			},

			LineItems{

				name: "NSSF",

				amount: 100.0,
			},
		},
	}

	fmt.Println(earnings)

	fmt.Println(deductions)

	

	pdf := gofpdf.New("P", "mm", "A4", "")

	w, _ := pdf.GetPageSize()

	pdf.AddPage()
	pdf.SetFont("arial", "B", 16)

	// Top Banner
	pdf.SetFillColor(0, 191, 255)
	pdf.Polygon([]gofpdf.PointType{
		{0, 0},
		{w, 0},
		{w, bannerHt},
		{0, bannerHt},
	}, "F")

	// Banner - Logo
	_, lineHt := pdf.GetFontSize()
	pdf.Image("images/logo1.png", xIndent, 0+(bannerHt-(bannerHt/1.5))/2.0, 30, 0, false, "", 0, "")

	// Banner - Address
	pdf.SetFont("arial", "", 12)
	pdf.SetTextColor(255, 255, 255)
	_, lineHt = pdf.GetFontSize()
	pdf.MoveTo(w-xIndent-124.0, (bannerHt-(lineHt*1.5*3.0))/2.0)
	pdf.MultiCell(124.0, lineHt*1.5, "P.O. Box 62345 - 00200 Nairobi, Harambee Ave, Nairobi\nNairobi, Kenya\n12345", gofpdf.BorderNone, gofpdf.AlignRight, false)

	//Header - Payslip (month)

	pdf.SetFont("arial", "", 16)
	pdf.SetTextColor(180, 180, 180)

	_, lineHt = pdf.GetFontSize()

	pdf.Text(w/3, bannerHt+lineHt*1.0, "PAYSLIP FOR JANUARY 2020")

	//Content
	summaryBlock(pdf, xIndent, bannerHt+lineHt*2.0, "Name", "Jayson Mulwa")
	summaryBlock(pdf, xIndent, bannerHt+lineHt*5.25, "ID No.", "00000000")

	summaryBlock(pdf, xIndent*4, bannerHt+lineHt*2.0, "Designation", "Software Engineer")
	summaryBlock(pdf, xIndent*4, bannerHt+lineHt*5.25, "KRA PIN", "0WA018AY9")

	summaryBlock(pdf, xIndent*8, bannerHt+lineHt*2.0, "Department", "IT")
	summaryBlock(pdf, xIndent*8, bannerHt+lineHt*5.25, "Payroll No.", "29A2018")

	//payCodesTitle()

	payCodesTitle(pdf, xIndent*2.5, bannerHt+lineHt*10.5-2*lineHt*0.75, "Earnings")
	payCodes(pdf, xIndent*2.5, bannerHt+lineHt*10.5, "Basic Pay", "100,000")
	payCodes(pdf, xIndent*2.5, bannerHt+lineHt*10.5+2*lineHt*0.75, "Commuter Allowance", "10,000")
	payCodes(pdf, xIndent*2.5, bannerHt+lineHt*10.5+4*lineHt*0.75, "House Allowance", "10,000")
	payCodes(pdf, xIndent*2.5, bannerHt+lineHt*10.5+6*lineHt*0.75, "Other Allowance", "10,000")
	payCodesTotals(pdf, xIndent*2.5, bannerHt+lineHt*10.5+8*lineHt*0.75, "Gross Pay", "10,000")

	payCodesTitle(pdf, xIndent*2.5, bannerHt+lineHt*10.5+10*lineHt*0.75, "Deductions")
	payCodes(pdf, xIndent*2.5, bannerHt+lineHt*10.5+12*lineHt*0.75, "PAYE", "100,000")
	payCodes(pdf, xIndent*2.5, bannerHt+lineHt*10.5+14*lineHt*0.75, "NHIF", "10,000")
	payCodes(pdf, xIndent*2.5, bannerHt+lineHt*10.5+16*lineHt*0.75, "NSSF", "10,000")
	payCodes(pdf, xIndent*2.5, bannerHt+lineHt*10.5+18*lineHt*0.75, "Sacco Contribution 1", "10,000")
	payCodes(pdf, xIndent*2.5, bannerHt+lineHt*10.5+20*lineHt*0.75, "Sacco Contribution 2", "10,000")
	payCodes(pdf, xIndent*2.5, bannerHt+lineHt*10.5+22*lineHt*0.75, "Bank Loan 1", "100,000")
	payCodes(pdf, xIndent*2.5, bannerHt+lineHt*10.5+24*lineHt*0.75, "Bank Loan 2", "100,000")
	payCodesTotals(pdf, xIndent*2.5, bannerHt+lineHt*10.5+26*lineHt*0.75, "Total Dedeuctions", "10,000")

	payCodesTitle(pdf, xIndent*2.5, bannerHt+lineHt*10.5+28*lineHt*0.75, "Tax Details")
	payCodes(pdf, xIndent*2.5, bannerHt+lineHt*10.5+30*lineHt*0.75, "Taxable Pay", "100,000")
	payCodes(pdf, xIndent*2.5, bannerHt+lineHt*10.5+32*lineHt*0.75, "Tax Charges", "10,000")
	payCodes(pdf, xIndent*2.5, bannerHt+lineHt*10.5+34*lineHt*0.75, "Tax Relief", "10,000")

	payCodesTotals(pdf, xIndent*2.5, bannerHt+lineHt*10.5+36*lineHt*0.75, "Netpay", "10,000")

	//Bottom Accent
	/*pdf.Polygon([]gofpdf.PointType{
		{0, h},
		{0, h - (bannerHt * 0.25)},
		{w, h - (bannerHt * 0.25)},
		{w, h},
	}, "F")*/

	//Footer Notes

	pdf.SetFont("arial", "", 12)
	pdf.SetTextColor(180, 180, 180)
	pdf.Text(xIndent, 290, "Signature:")
	pdf.Line(43, 290, 105, 290)
	pdf.Text(w/2+xIndent/2, 290, "Bank:")
	pdf.Line(136, 290, w-xIndent, 290)

	//drawGrid(pdf)

	err := pdf.OutputFileAndClose("payslip.pdf")

	if err != nil {

		fmt.Println("error!")
		panic(err)

	}


	c.Send("Works")

}

func summaryBlock(pdf *gofpdf.Fpdf, x, y float64, title string, data ...string) (float64, float64) {
	pdf.SetFont("times", "", 14)
	pdf.SetTextColor(180, 180, 180)
	_, lineHt := pdf.GetFontSize()
	y = y + lineHt
	pdf.Text(x, y, title)
	y = y + lineHt*.25
	pdf.SetTextColor(50, 50, 50)
	for _, str := range data {
		y = y + lineHt*1.25
		pdf.Text(x, y, str)
	}
	return x, y
}

func payCodes(pdf *gofpdf.Fpdf, x, y float64, paycode string, amount string) {
	w, _ := pdf.GetPageSize()
	pdf.SetFont("arial", "", 12)
	pdf.SetTextColor(50, 50, 50)
	_, lineHt := pdf.GetFontSize()
	y = y + lineHt
	pdf.Text(x, y, paycode)

	pdf.SetTextColor(50, 50, 50)
	pdf.Text((w - xIndent*4), y, amount)
	//pdf.CellFormat(20, , amount, gofpdf.BorderNone, gofpdf.LineBreakNone, gofpdf.AlignRight, false, 0, "")

}

func payCodesTitle(pdf *gofpdf.Fpdf, x, y float64, paycode string) {

	//w, _:= pdf.GetPageSize()
	pdf.SetFont("arial", "", 12)
	pdf.SetTextColor(50, 50, 50)
	_, lineHt := pdf.GetFontSize()
	y = y + lineHt
	pdf.Text(x-10, y, paycode)

}

func payCodesTotals(pdf *gofpdf.Fpdf, x, y float64, paycode string, amount string) {

	w, _ := pdf.GetPageSize()
	pdf.SetFont("arial", "", 12)
	pdf.SetTextColor(50, 50, 50)
	_, lineHt := pdf.GetFontSize()
	y = y + lineHt
	pdf.Text(x-10, y, paycode)

	pdf.SetTextColor(50, 50, 50)
	pdf.Text((w - xIndent*4), y, amount)

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
