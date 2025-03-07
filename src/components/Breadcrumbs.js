import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  if (!pathname) return null;
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="breadcrumb">
      <ol
        style={{
          display: "flex",
          listStyle: "none",
          margin: 0,
          padding: 0,
          textTransform: "capitalize",
        }}
      >
        <li>
          <Link href="/" title="Home" className="global-underline">
            <span>Home</span>
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          const formattedSegment = decodeURIComponent(segment).replace(
            /-/g,
            " "
          );

          return (
            <li key={path}>
              <span className="mx-2">{">"}</span>
              {isLast ? (
                <span>{formattedSegment}</span>
              ) : (
                <Link
                  href={path}
                  title={formattedSegment}
                  className="global-underline"
                >
                  <span>{formattedSegment}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
