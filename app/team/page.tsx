import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TeamCard } from "@/components/team-card"
import { ArrowRight, Linkedin, Github, Mail, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Team - Quantix Lab",
  description: "Meet the talented professionals behind Quantix Lab. Our leadership and engineering team is dedicated to delivering exceptional technology solutions.",
}

const managementTeam = [
  {
    name: "Aswin K A",
    role: "Management Head & HR Manager",
    image:"/Aswin img.jpeg",
    bio: "Founder managing HR, administration, finance, and operations with strategic leadership and precision",
    linkedin: "https:www.linkedin.com/in/aswin-k-a-77581a249",
    github: "https://github.com/Aswin4532003",
    email: "aswin453ka@gmail.com",
  },
  {
    name: "Siranjeevi B U ",
    role: "Head- Digital marketing (SEO,SMO) & HR Executive ",
    image: "/Siranji pic.png",
    bio: "Leading brand growth through expert SEO, SMO strategies, and organizational excellence in talent and HR management.",
    linkedin: "https://www.linkedin.com/in/siranjeevi-bu/",
    github: "https://github.com/siranjj",
    email: "Siranjeevi.uthaman@gmail.com",
  },
  {
    name: "Pradeep Kumar M",
    role: "legal & compliance officer & QA Manager",
    image: "/placeholder-user.jpg",
    bio: "Ensuring regulatory compliance, managing legal risks, protecting company integrity and ethical standards.",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
    github: "https://github.com/Selvipr",
    email: "pradeepselvi126@gmail.com",
  },
  {
    name: "Sargunan J S",
    role: "Cheif Operation Officer (COO) & Lead Software Engineer",
    image: "/Sargunan_img-removebg-preview.png",
    bio: "Strategic operations leader driving efficiency, growth, performance, and scalable business transformation globally.",
    linkedin: "https://www.linkedin.com/in/sargunan-j-s-28915b2a9/",
    github: "https://github.com/Sargunan-js",
    email: "ssunsargunan@gmail.com",
  },
   {
    name: "Hari Haran T G",
    role: "Full Stack Developer",
    image: "/HariHaran.jpeg",
    bio: "Creating intuitive user experiences",
    linkedin: "https://www.linkedin.com/in/hariharan-t-g-51013a284/",
    github: "https://github.com/21Hari",
    email: "haribalaji@gmail.com",
  },
]

const engineeringTeam = [
  {
    name: "Hari Haran",
    role: "Senior Developer ",
    image: "/HariHaran.jpeg",
    bio: "Full-stack expert with 1+ years building enterprise applications.",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
    github: "https://github.com/emilyrodriguez",
    email: "emily@quantixlab.com",
  },
  {
    name: "Kirshna Kumar",
    role: "Frontend Developer",
    image: "/placeholder-user.jpg",
    bio: "React specialist crafting beautiful, responsive user interfaces.",
    linkedin: "https://linkedin.com/in/jameschen",
    github: "https://github.com/jameschen",
    email: "james@quantixlab.com",
  },
  {
    name: "Bharathi",
    role: "Backend Developer",
    image: "/placeholder-user.jpg",
    bio: "Node.js and Python expert building scalable APIs and services.",
    linkedin: "https://linkedin.com/in/priyapatel",
    github: "https://github.com/priyapatel",
    email: "priya@quantixlab.com",
  },
  {
    name: "Tharmari Selvan",
    role: "Full Stack Developer",
      image: "/placeholder-user.jpg",
    bio: "Versatile developer experienced in modern web technologies.",
    linkedin: "https://linkedin.com/in/alexthompson",
    github: "https://github.com/alexthompson",
    email: "alex@quantixlab.com",
  },
  {
    name: "Sarugunan",
    role: "DevOps Engineer",
    image: "/placeholder-user.jpg",
    bio: "Cloud infrastructure specialist with AWS and Kubernetes expertise.",
    linkedin: "https://linkedin.com/in/mariagarcia",
    github: "https://github.com/mariagarcia",
    email: "maria@quantixlab.com",
  },
  {
    name: "Predeep",
    role: "QA Engineer",
    image: "/placeholder-user.jpg",
    bio: "Quality assurance expert ensuring bug-free, reliable software.",
    linkedin: "https://linkedin.com/in/robertlee",
    github: "https://github.com/robertlee",
    email: "robert@quantixlab.com",
  },
]

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-20 lg:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Team
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Meet the Experts Behind Quantix Lab
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our talented team of professionals combines deep technical expertise with a passion 
              for innovation to deliver exceptional solutions for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Leadership & Management Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experienced leaders guiding our vision and strategy for success.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {managementTeam.map((member) => (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                linkedin={member.linkedin}
                github={member.github}
                email={member.email}
                variant="management"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Team Section */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Engineering
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Core Engineering Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Talented engineers building innovative solutions with cutting-edge technologies.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringTeam.map((member) => (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                linkedin={member.linkedin}
                github={member.github}
                email={member.email}
                variant="team"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Company Contact Card */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-border bg-background p-8 lg:p-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                  Get in Touch with Quantix Lab
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Have a project in mind? We&apos;d love to hear from you.
                </p>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="flex items-center gap-4 rounded-lg border border-border bg-muted/30 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:info@quantixlab.com" className="font-medium text-foreground hover:text-primary">
                      info@quantixlab.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border border-border bg-muted/30 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/company/quantixlab" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium text-foreground hover:text-primary"
                    >
                      Quantix Lab
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border border-border bg-muted/30 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a 
                      href="https://github.com/quantixlab" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium text-foreground hover:text-primary"
                    >
                      @quantixlab
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border border-border bg-muted/30 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <a 
                      href="https://wa.me/1234567890" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium text-foreground hover:text-primary"
                    >
                      81252575337
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
              Want to Join Our Team?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              We&apos;re always looking for talented individuals who are passionate about technology 
              and innovation. Check out our open positions.
            </p>

          </div>
        </div>
      </section>
    </div>
  )
}
