import { db } from '@/db';
import { Customers, Invoices } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { notFound } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import Invoice from './invoice';

export default async function InvoicePage({ params }: { params: { invoiceId: number } }) {
  const { invoiceId } = await params;
  const { userId } = await auth();

  if (!userId) return;

  const [result] = await db
    .select()
    .from(Invoices)
    .innerJoin(Customers, eq(Invoices.customerId, Customers.id))
    .where(and(eq(Invoices.id, invoiceId), eq(Invoices.userId, userId)))
    .limit(1);

  if (!result) {
    notFound();
  }

  const invoice = {
    ...result.invoices,
    customer: result.customers,
  };
  return <Invoice invoice={invoice} />;
}
