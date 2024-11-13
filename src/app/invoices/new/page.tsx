'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { createInvoiceAction } from '@/app/actions';
import { SyntheticEvent, useState } from 'react';
import SubmitButton from '@/components/SubmitButton';
import Form from 'next/form';

export default function CreateInvoice() {
  const [state, setState] = useState('read');

  const handleOnSubmit = async (event: SyntheticEvent) => {
    if (state === 'pending') {
      event.preventDefault();
      return;
    }

    setState('pending');
  };

  return (
    <main className="flex flex-col justify-center gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Create Invoice</h1>
      </div>
      <Form action={createInvoiceAction} onSubmit={handleOnSubmit} className="grid gap-4 max-w-xs">
        <div>
          <Label htmlFor="name" className="block font-semibold mb-2 text-sm">
            Billing Name
          </Label>
          <Input id="name" name="name" type="text"></Input>
        </div>
        <div>
          <Label htmlFor="email" className="block font-semibold mb-2 text-sm">
            Billing Email
          </Label>
          <Input id="email" name="email" type="email"></Input>
        </div>
        <div>
          <Label htmlFor="value" className="block font-semibold mb-2 text-sm">
            Value
          </Label>
          <Input id="value" name="value" type="text"></Input>
        </div>
        <div>
          <Label htmlFor="description" className="block font-semibold mb-2 text-sm">
            Description
          </Label>
          <Textarea id="description" name="description"></Textarea>
        </div>
        <div>
          <SubmitButton />
        </div>
      </Form>
    </main>
  );
}
