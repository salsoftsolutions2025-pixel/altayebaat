import BookReader from "@/components/BookReader";

type PageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function EnglishBookReaderPage({
  searchParams,
}: PageProps) {
  const params =
    await searchParams;

  const requestedPage =
    Number(params.page ?? "1");

  const initialPage =
    Number.isFinite(requestedPage) &&
    requestedPage > 0
      ? requestedPage
      : 1;

  return (
    <BookReader
      locale="en"
      initialPage={initialPage}
    />
  );
}