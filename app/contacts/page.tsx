import { FullContacts } from '@/widgets/full-contacts'
import { ContactMap } from '@/widgets/contact-map'
import { ApplicationForm } from '@/widgets/application-form'

const ContactPage = () => {
  return (
    <>
      <FullContacts />
      <ContactMap />
      <section className="mt-[9px] md:mt-[94px]">
        <ApplicationForm variant="secondary" />
      </section>
    </>
  )
}

export default ContactPage
