import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Linkedin, Mail, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Get In Touch</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Interested in collaborating or discussing cloud infrastructure opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <Card className="border-t-4 border-t-cyan-500 shadow-xl">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl text-gray-900">Let's Connect</CardTitle>
            <p className="text-gray-600 mt-2">Available for consulting, full-time opportunities, and technical discussions</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-cyan-50 to-white rounded-lg border border-cyan-100 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <p className="text-gray-600 text-sm mb-4">Professional networking and opportunities</p>
                <Button asChild variant="outline" className="hover:border-cyan-600 hover:text-cyan-600">
                  <a 
                    href="https://www.linkedin.com/in/richardaugenti/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect
                  </a>
                </Button>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm mb-4">Direct communication for inquiries</p>
                <Button asChild variant="outline" className="hover:border-blue-600 hover:text-blue-600">
                  <a href="mailto:richard.augenti@rivia.io">
                    Send Email
                  </a>
                </Button>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-cyan-600" />
                <p className="text-gray-700 font-medium">Response time: Usually within 24 hours</p>
              </div>
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all">
                <a 
                  href="https://www.linkedin.com/in/richardaugenti/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}