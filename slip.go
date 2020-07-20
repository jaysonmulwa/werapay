package main

import (

	"github.com/jung-kurt/gofpdf"
	"fmt"

)

const (

	month = "JANUARY"
	year = "2020"


)

const (
	bannerHt = 52.0
	xIndent  = 20.0
)




func main () {

	pdf := gofpdf.New("P", "mm", "A4", "")

	w, h := pdf.GetPageSize()

	pdf.AddPage()
	pdf.SetFont("arial", "B", 16)

	// Top Banner
	pdf.SetFillColor(0,191,255)
	pdf.Polygon([]gofpdf.PointType{
		{0, 0},
		{w, 0},
		{w, bannerHt},
		{0, bannerHt },
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
	summaryBlock(pdf, xIndent, bannerHt+lineHt*6.25, "ID No.", "00000000")


	summaryBlock(pdf, xIndent*4, bannerHt+lineHt*2.0, "Designation", "Software Engineer")
	summaryBlock(pdf, xIndent*4, bannerHt+lineHt*6.25, "KRA PIN", "0WA018AY9")

	summaryBlock(pdf, xIndent*8, bannerHt+lineHt*2.0, "Department", "IT")
	summaryBlock(pdf, xIndent*8, bannerHt+lineHt*6.25, "Payroll No.", "29A2018")

	//Line Items - Paycodes

	payCodes(pdf, xIndent*2.5,  bannerHt+lineHt*12.5, "Basic Pay", "100,000")
	payCodes(pdf, xIndent*2.5,  bannerHt+lineHt*12.5+2*lineHt, "Commuter Allowance", "10,000")
	payCodes(pdf, xIndent*2.5,  bannerHt+lineHt*12.5+4*lineHt, "House Allowance", "10,000")
	payCodes(pdf, xIndent*2.5,  bannerHt+lineHt*12.5+6*lineHt, "Other Allowance", "10,000")

	payCodes(pdf, xIndent*2.5,  bannerHt+lineHt*12.5+8*lineHt, "PAYE", "100,000")
	payCodes(pdf, xIndent*2.5,  bannerHt+lineHt*12.5+10*lineHt, "NHIF", "10,000")
	payCodes(pdf, xIndent*2.5,  bannerHt+lineHt*12.5+12*lineHt, "NSSF", "10,000")
	payCodes(pdf, xIndent*2.5,  bannerHt+lineHt*12.5+14*lineHt, "Sacco Contribution 1", "10,000")
	payCodes(pdf, xIndent*2.5,  bannerHt+lineHt*12.5+16*lineHt, "Sacco Contribution 2", "10,000")
	payCodes(pdf, xIndent*2.5,  bannerHt+lineHt*12.5+18*lineHt, "Bank Loan 1", "100,000")
	payCodes(pdf, xIndent*2.5,  bannerHt+lineHt*12.5+20*lineHt, "Bank Loan 2", "100,000")






	//Bottom Accent
	pdf.Polygon([]gofpdf.PointType{
		{0, h},
		{0, h - (bannerHt * 0.25)},
		{w, h - (bannerHt * 0.25)},
		{w, h},
	}, "F")


	

	drawGrid(pdf)

	err := pdf.OutputFileAndClose("payslip.pdf")

	if err != nil {

		fmt.Println("error!")
		panic(err)

	}

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


func payCodes(pdf *gofpdf.Fpdf, x, y float64, paycode string, amount string){
	w, _:= pdf.GetPageSize()
	pdf.SetFont("arial", "", 12)
	pdf.SetTextColor(50, 50, 50)
	_, lineHt := pdf.GetFontSize()
	y = y + lineHt
	pdf.Text(x, y, paycode)


	
	pdf.SetTextColor(50, 50, 50)
	pdf.Text((w-xIndent*4), y, amount)
	

}

func drawGrid(pdf *gofpdf.Fpdf) {
	w, h := pdf.GetPageSize()

	//pageSize(pdf, true, true)


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


/*func pageSize(pdf *gofpdf.Fpdf, w bool, h bool) (float64, float64) {

	if w == true && h == true{

		
		x, y := pdf.GetPageSize()

		return x, y
	}


	if w != true && h == true{

		_, y := pdf.GetPageSize()

		return _, y

	}

	if w == true && h != true{

		x, _ := pdf.GetPageSize()

		return x, _

	} 

	if w != true && h != true{

		_, _ := pdf.GetPageSize()

		return _, _

	} 

	
}*/