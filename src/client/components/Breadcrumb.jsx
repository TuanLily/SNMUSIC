import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'

/**
 * Reusable breadcrumb component.
 * - Auto-builds crumbs from the current location when `items` is not provided.
 * - Accepts an optional `mapLabels` to prettify path segments.
 * - Example:
 *   <Breadcrumb mapLabels={{ library: 'Library', tracklist: 'Tracklist' }} />
 *   <Breadcrumb items={[{ label: 'Home', path: '/', active: false }, { label: 'About', path: '/about', active: true }]} />
 */
function Breadcrumb({ items, mapLabels = {} }) {
  const location = useLocation()

  const computedItems = useMemo(() => {
    if (items && items.length) return items

    const segments = location.pathname.split('/').filter(Boolean)
    const prettify = (segment) =>
      mapLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)

    return segments.map((segment, idx) => ({
      label: prettify(segment),
      path: `/${segments.slice(0, idx + 1).join('/')}`,
      active: idx === segments.length - 1,
    }))
  }, [items, location.pathname, mapLabels])

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>

        {computedItems.length === 0 ? (
          <li className="breadcrumb-item active" aria-current="page">
            Home
          </li>
        ) : (
          computedItems.map((crumb) => (
            <li
              key={crumb.path}
              className={`breadcrumb-item${crumb.active ? ' active' : ''}`}
              aria-current={crumb.active ? 'page' : undefined}
            >
              {crumb.active ? crumb.label : <Link to={crumb.path}>{crumb.label}</Link>}
            </li>
          ))
        )}
      </ol>
    </nav>
  )
}

export default Breadcrumb

