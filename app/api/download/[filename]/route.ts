import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ filename: string }> }
) {
    const { filename } = await params;
    const filePath = path.join(process.cwd(), 'public', 'Harsh_Pal_Singh_Resume.pdf');
    
    try {
        if (!fs.existsSync(filePath)) {
            console.error(`File not found at: ${filePath}`);
            return new NextResponse('File not found', { status: 404 });
        }

        const fileBuffer = await fs.promises.readFile(filePath);
        
        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="${filename}"`,
                'Cache-Control': 'no-cache',
            },
        });
    } catch (error) {
        console.error('Download error:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
