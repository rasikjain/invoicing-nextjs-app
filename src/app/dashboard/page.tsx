import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
    TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { db } from '@/db';
import { Invoices } from '@/db/schema';
import { CirclePlus } from 'lucide-react';
import Link from 'next/link';

export default async function Dashboard() {
  const results = await db.select().from(Invoices);
  console.log(results);

  return (
    <main className="flex flex-col justify-center text-center gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <p>
          <Button variant={'ghost'} className="inline-flex gap-2" asChild>
            <Link href={'invoices/new'}>
              <CirclePlus className="h-4 w-4" />
              Create Invoice
            </Link>
          </Button>
        </p>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left w-[100px] p-4">Date</TableHead>
            <TableHead className="text-left p-4">Customer</TableHead>
            <TableHead className="text-left p-4">Email </TableHead>
            <TableHead className="text-center p-4">Status</TableHead>
            <TableHead className="text-right p-4">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((invoiceItem) => {
            return (
              <TableRow key={invoiceItem.id}>
                <TableCell className="font-medium text-left p-0">
                  <Link href={`/invoices/${invoiceItem.id}`} className="block p-4 font-semibold">
                    {new Date(invoiceItem.createTs).toLocaleDateString()}
                  </Link>
                </TableCell>
                <TableCell className="font-medium text-left p-0">
                  <Link href={`/invoices/${invoiceItem.id}`} className="block p-4 font-semibold">
                    F Name
                  </Link>
                </TableCell>
                <TableCell className="text-left p-0">
                  <Link href={`/invoices/${invoiceItem.id}`} className="block p-4">test@test.com</Link>
                </TableCell>
                <TableCell className="text-center p-0">
                  <Link href={`/invoices/${invoiceItem.id}`} className="block p-4">
                    <Badge className="rounded-full">{invoiceItem.status}</Badge>
                  </Link>
                </TableCell>
                <TableCell className="text-right p-0">
                  <Link href={`/invoices/${invoiceItem.id}`} className="block p-4">${(invoiceItem.value / 100).toFixed(2)}</Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </main>
  );
}
