'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Form, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { addNote } from '@/lib/dbActions';
import { AddNoteSchema } from '@/lib/validationSchemas';


const onSubmit = async (data: { note: string; contactId: number; owner: string }) => {
  await addNote(data);
  swal('Success', 'Your note has been added', 'success', {
    timer: 2000,
  });
};

const AddNoteForm = ({ contactId }: { contactId: number }) => {
  const { data: session, status } = useSession();
  const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddNoteSchema),
  });

  if (status === 'loading') {
    return null;
  }

 return (
  <Card className="m-3">
    <Card.Header className="text-center">Add Timestamped Note</Card.Header>
    <Card.Body>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Note</Form.Label>
          <input
            type="text"
            {...register('note')}
            className={`form-control ${errors.note ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.note?.message}</div>
        </Form.Group>
        <input type="hidden" {...register('owner')} value={currentUser} />
        <input type="hidden" {...register('contactId')} value={contactId} />
        <Row className="pt-3">
          <Col>
            <Button type="submit" variant="primary">Submit</Button>
          </Col>
          <Col>
            <Button type="button" onClick={() => reset()} variant="warning">Reset</Button>
          </Col>
        </Row>
      </Form>
    </Card.Body>
  </Card>
 );
};

export default AddNoteForm;