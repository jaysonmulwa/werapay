package main

import (
	"encoding/base64"
	"fmt"
	"github.com/joho/godotenv"
	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
	"io/ioutil"
	"log"
	"os"
	"sync"
)

func apiKey() string {

	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	api_key := os.Getenv("SENDGRID_API_KEY")

	return api_key

}

func setFrom(m *mail.SGMailV3, wg *sync.WaitGroup) {

	defer wg.Done()

	from := mail.NewEmail("Me", "jayson.mulwa@gmail.com")

	m.SetFrom(from)

}

func addContent(send_name string, m *mail.SGMailV3, wg *sync.WaitGroup) {

	defer wg.Done()

	content := mail.NewContent("text/html", "<p>Sent By Salario.</p>")

	m.AddContent(content)

}

func addPersonalizations(send_name string, send_email string, m *mail.SGMailV3, wg *sync.WaitGroup) {

	defer wg.Done()

	to := mail.NewEmail(send_name, send_email)

	personalization := mail.NewPersonalization()
	personalization.AddTos(to)
	personalization.Subject = "Payslip for " + send_name

	m.AddPersonalizations(personalization)

}

func addAttachment(slip_name string, m *mail.SGMailV3, wg *sync.WaitGroup) {

	defer wg.Done()

	a_pdf := mail.NewAttachment()
	dat, err := ioutil.ReadFile("./slips/" + slip_name)
	if err != nil {
		fmt.Println(err)
		//return "Failed", fmt.Errorf("Cannot Find Slip: %s", err)
	}

	encoded := base64.StdEncoding.EncodeToString([]byte(dat))
	a_pdf.SetContent(encoded)
	a_pdf.SetType("application/pdf")
	a_pdf.SetFilename(slip_name)
	a_pdf.SetDisposition("attachment")
	a_pdf.SetContentID("PaySlip")

	m.AddAttachment(a_pdf)

}

func sendEmail(slip_name string, send_name string, send_email string) (string, error) {

	m := mail.NewV3Mail()

	api_key := apiKey()

	var wg sync.WaitGroup

	wg.Add(4)

	go setFrom(m, &wg)
	go addContent(send_name, m, &wg)
	go addPersonalizations(send_name, send_email, m, &wg)
	go addAttachment(slip_name, m, &wg)

	wg.Wait()

	request := sendgrid.GetRequest(api_key, "/v3/mail/send", "https://api.sendgrid.com")
	request.Method = "POST"
	request.Body = mail.GetRequestBody(m)
	response, err := sendgrid.API(request)

	if err != nil {

		log.Println(err)
		return "Failed", fmt.Errorf("Cannot Send: %s", err)

	} else {
		fmt.Println(response.StatusCode)
		fmt.Println(response.Body)
		fmt.Println(response.Headers)
	}

	return "Success", nil

}
