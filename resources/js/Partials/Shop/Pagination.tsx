
export const Pagination = ({ links, setNewRouteUrl }: any) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-10 text-base">
                {links?.map((link: { url: string, active: boolean, label: string }, index: number) => (
                    <li key={index}>
                        <button
                            title="button"
                            type="button"
                            onClick={() => { link.url ? setNewRouteUrl(link.url) : '' }}
                            className={`flex items-center justify-center px-4 h-10 mr-1 leading-tight border border-gray-300 rounded
                                ${link.active ?
                                    'text-blue-600 bg-blue-50 border-blue-300 hover:bg-blue-100 hover:text-blue-700' :
                                    'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'}
                                ${index === 0 ? 'ms-0' : ''}
                                ${index === links.length - 1 ? 'rounded-r-lg' : ''}
                            `}
                        >
                            <div dangerouslySetInnerHTML={{ __html: link.label }} />
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
