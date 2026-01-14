import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    // TODO: Verify webhook signature (Stripe/PayPal)
    // TODO: Handle payment events:
    // - payment_intent.succeeded -> Create enrollment
    // - payment_intent.failed -> Log failure
    // - invoice.paid -> Update enrollment status

    if (type === 'payment_intent.succeeded') {
      const { customer, amount, metadata } = data.object;
      
      // TODO: Create enrollment for user
      // await createEnrollment({
      //   userId: metadata.userId,
      //   courseId: metadata.courseId,
      //   paymentId: data.object.id,
      // });

      return NextResponse.json({ received: true });
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}
