"use client";

import { Card, Image } from 'react-bootstrap';
import { Contact } from '@/lib/validationSchemas';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCard = ({ contact }: { contact: Contact }) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Header> 
          <Image src={contact.image} alt={`${contact.firstName} ${contact.lastName}`} width={75} />
          <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
          <Card.Subtitle>{contact.address}</Card.Subtitle>
        </Card.Header>
          <Card.Text>
            {contact.description}
          </Card.Text>    
      </Card.Body>
  </Card>
  );
}

export default ContactCard;
