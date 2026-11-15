import { Col, Container, Row } from 'react-bootstrap';
import ContactCardAdmin from '@/components/ContactCardAdmin';
import { prisma } from '@/lib/prisma';
import { adminProtectedPage } from '@/lib/page-protection';
import { auth } from '@/lib/auth';

/** Renders all contacts for the admin, including their owners. */
const AdminPage = async () => {
  const session = await auth();
  adminProtectedPage(
    session as {
      user: { email: string; id: string; name: string };
    } | null,
  );
  const contacts = await prisma.contact.findMany({});
  const notes = await prisma.note.findMany({});

  return (
    <main>
      <Container id="list" className="py-3">
        <Row>
          <Col>
            <h2 className="text-center">List Contacts (Admin)</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
              {contacts.map((contact) => (
                <Col key={contact.id}>
                  <ContactCardAdmin
                    contact={contact}
                    notes={notes.filter((note) => note.contactId === contact.id)}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AdminPage;