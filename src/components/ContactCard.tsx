"use client";

import { Contact } from '@prisma/client';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import Link from 'next/link';

const ContactCard = ({ contact }: { contact: Contact }) => {
  return (
    <>
      <Card className="h-100">
        <Card.Body>
            <Card.Header>
            <Image src={contact.image} alt={`${contact.firstName} ${contact.lastName}`} width={75} height={75} />
            <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
            <Card.Subtitle>{contact.address}</Card.Subtitle>
            </Card.Header>
            <br />
            <Card.Subtitle>{contact.description}</Card.Subtitle>
        </Card.Body>
        <Card.Footer>
        <Link href={`edit/${contact.id}`}>Edit</Link>
        </Card.Footer>
      </Card>
    </>
  );
}

export default ContactCard;
