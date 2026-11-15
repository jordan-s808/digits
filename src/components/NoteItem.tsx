"use client";

import { Note } from '@prisma/client';
import { ListGroup } from 'react-bootstrap';

const NoteItem = ({ note }: { note: Note }) => {
  return (
    <>
    <ListGroup.Item>
      <p className="fw-lighter">{note.createdAt.toLocaleDateString('en-US')}</p>
      <p>{note.note}</p>
    </ListGroup.Item>
    </>
  );
}

export default NoteItem;