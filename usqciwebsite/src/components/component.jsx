import Link from "next/link"
import { Button } from "@/components/ui/button"
import VideoBackground from './VideoBackground'

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <TruckIcon className="h-8 w-8" />
          <span className="text-2xl font-bold">US Quality Carrier</span>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>Home</Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>About</Link>
            <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>Services</Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>Contact</Link>
            <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>Log in</Link>

          </nav>
          <Button>Get a Quote</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <VideoBackground />
          <div className="relative bg-black bg-opacity-50 py-24 px-6 md:px-12 flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl font-bold tracking-tight mb-4 text-white">Reliable Logistics Solutions</h1>
            <p className="text-xl text-white max-w-3xl mb-8">
              US Quality Carrier Inc. provides efficient and trustworthy logistics services to businesses across the
              United States.
            </p>
            <div className="flex gap-4">
              <Button>Get a Quote</Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
        </section>
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">About US Quality Carrier</h2>
              <p className="text-muted-foreground">
                US Quality Carrier Inc. is a leading logistics company that has been providing reliable and efficient
                transportation solutions for over 20 years. Our mission is to deliver exceptional service and value to
                our clients, while upholding the highest standards of safety and sustainability.
              </p>
              <p className="text-muted-foreground">
                With a fleet of modern trucks and a team of experienced professionals, we are committed to ensuring that
                your goods reach their destination on time and in perfect condition. Our commitment to innovation and
                continuous improvement allows us to stay ahead of the curve and provide our clients with the best
                possible service.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                width="500"
                height="400"
                alt="About US Quality Carrier"
                className="rounded-xl shadow-lg"
                style={{ aspectRatio: "500/400", objectFit: "cover" }} />
              <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-10 rounded-xl animate-pulse" />
            </div>
          </div>
        </section>
        <section className="bg-muted py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Logistics Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-xl shadow-lg p-6 flex flex-col gap-4">
                <TruckIcon className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Freight</h3>
                <p className="text-muted-foreground">
                  Our freight services ensure your goods are transported safely and efficiently, with a focus on on-time
                  delivery and cost-effectiveness.
                </p>
                <Button>Learn More</Button>
              </div>
              <div className="bg-background rounded-xl shadow-lg p-6 flex flex-col gap-4">
                <WarehouseIcon className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Warehousing</h3>
                <p className="text-muted-foreground">
                  Our state-of-the-art warehousing facilities provide secure and efficient storage solutions for your
                  goods, with advanced inventory management systems.
                </p>
                <Button>Learn More</Button>
              </div>
              <div className="bg-background rounded-xl shadow-lg p-6 flex flex-col gap-4">
                <TruckIcon className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold">Transportation</h3>
                <p className="text-muted-foreground">
                  Our comprehensive transportation services include point-to-point delivery, cross-docking, and
                  last-mile logistics, ensuring your goods reach their destination quickly and safely.
                </p>
                <Button>Learn More</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-6 md:px-12 flex items-center justify-between">
        <p className="text-sm">&copy; 2024 US Quality Carrier Inc. All rights reserved.</p>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>Privacy</Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>Terms</Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>Contact</Link>
        </nav>
      </footer>
    </div>
  );
}

function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

function WarehouseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
      <path d="M6 18h12" />
      <path d="M6 14h12" />
      <rect width="12" height="12" x="6" y="10" />
    </svg>
  );
}