import Link from "next/link";

export default function Breadcrumb({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <ol className="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index === items.length - 1 ? (
              <span itemProp="name">{item.name}</span>
            ) : (
              <Link legacyBehavior href={item.href}>
                <a itemProp="item">
                  <span itemProp="name">{item.name}</span>
                </a>
              </Link>
            )}
            <meta itemProp="position" content={index + 1} />
          </li>
        ))}
      </ol>
      
      <style jsx>{`
        .breadcrumb-nav {
          margin-bottom: 1rem;
        }
        .breadcrumb {
          display: flex;
          flex-wrap: wrap;
          padding: 0.75rem 1rem;
          margin-bottom: 1rem;
          list-style: none;
          background-color: #f8f9fa;
          border-radius: 0.375rem;
        }
        .breadcrumb-item {
          display: flex;
        }
        .breadcrumb-item + .breadcrumb-item {
          padding-left: 0.5rem;
        }
        .breadcrumb-item + .breadcrumb-item::before {
          display: inline-block;
          padding-right: 0.5rem;
          color: #6c757d;
          content: "/";
        }
        .breadcrumb-item.active {
          color: #6c757d;
        }
        .breadcrumb-item a {
          color: #007bff;
          text-decoration: none;
        }
        .breadcrumb-item a:hover {
          color: #0056b3;
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
}
