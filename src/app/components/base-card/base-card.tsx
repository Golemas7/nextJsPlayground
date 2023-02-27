import Link from 'next/link';
import Image from 'next/image';

export default function BaseCard({
    id,
    imageSrc,
    imageAlt,
    title,
    content,
}: {
    id: number;
    imageSrc: string;
    imageAlt: string;
    title: string;
    content: string;
}) {
    return (
        <Link href={'/beers/' + id.toString()}>
            <div>
                <Image
                    data-testid="cardImage"
                    src={imageSrc}
                    alt={imageAlt}
                    width="250"
                    height="250"
                />
                <h3>{title}</h3>
                <p data-testid="content">{content}</p>
            </div>
        </Link>
    );
}
