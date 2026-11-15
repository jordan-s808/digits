"use client";

import { Contact, Note } from '@prisma/client';
import Card from 'react-bootstrap/Card';
import { Image, ListGroup } from 'react-bootstrap';
import Link from 'next/link';
import NoteItem from './NoteItem';
import AddNoteForm from './AddNoteForm';

const ContactCard = ({ contact, notes }: { contact: Contact; notes: Note[] }) => {
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
        <ListGroup variant="flush">
          {notes.map((note) => <NoteItem key={note.id} note={note}/>)}
        </ListGroup>
        <AddNoteForm contactId={contact.id} />
        <Card.Footer>
        <Link href={`edit/${contact.id}`}>Edit</Link>
        </Card.Footer>
      </Card>
    </>
  );
}

export default ContactCard;
