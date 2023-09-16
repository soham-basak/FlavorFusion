import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/utils/connect';
import { getAuthSession } from '@/utils/auth';

// GET SINGLE PRODUCT

export const GET = async ( req:NextRequest, { params }: { params: { id: string}}) => {
    const { id } = params;

    try {
        const product = await prisma.product.findUnique({
            where: {
                id:id
            }, 
        });
        return new NextResponse(
            JSON.stringify(product), 
            {status: 200}
        );
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({message: "Something went wrong"}), 
            {status: 500}
        );
    }
}

// DELETE SINGLE PRODUCT

export const DELETE = async ( req:NextRequest, { params }: { params: { id: string}}) => {
    const { id } = params;

    const session = await getAuthSession()

    if(session?.user.isAdmin){
       try {
        await prisma.product.delete({
            where: {
                id:id
            }, 
        });
        return new NextResponse(
            JSON.stringify("Product deleted!"), 
            {status: 200}
        );
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({message: "Something went wrong"}), 
            {status: 500}
        );
    } 
    } else {
        return new NextResponse(
            JSON.stringify({message: "Your are not allowed to delete this item"}), 
            {status: 403}
        );
    }

    
}