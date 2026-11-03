# Contact form delivery

The static Contact page posts to FormSubmit, which forwards inquiries to
`admin@mountcarmelgames.com`. No IONOS password or SMTP credentials are stored in
the website. The form keeps FormSubmit's default CAPTCHA and includes a honeypot.

## One-time activation

1. Submit a message from the Contact page on the deployed website.
2. Open the activation email sent to `admin@mountcarmelgames.com` and confirm the
   form. Check spam if it does not arrive.
3. Verify receipt in the mailbox before announcing the form as available.

FormSubmit handles the confirmation/CAPTCHA and result page after submission.
The website does not claim successful delivery itself. The sender's `email`
field is included so you can reply to their inquiry.

Local verification should intercept submissions rather than send test messages.
Actual inbox delivery and recipient activation must be checked by the mailbox
owner. The direct email link remains available alongside the form.

Documentation: https://formsubmit.co/documentation and https://formsubmit.co/help
