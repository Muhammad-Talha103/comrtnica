"use client";

const Breadcrumbs = ({ items }) => {
  if (!items || !items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="w-full px-4 pt-2">
      <ol className="flex flex-wrap items-center gap-1 text-xs tablet:text-sm text-[#3C3E41]">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-1 text-[#9CA3AF]">/</span>}
            {item.href ? (
              <a href={item.href} className="hover:underline">
                {item.label}
              </a>
            ) : (
              <span aria-current="page" className="font-semibold">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;


