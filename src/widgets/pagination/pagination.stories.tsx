import React, { useState } from "react";
import { Pagination } from "./pagination";

export default { title: "Pagination", component: Pagination };

export const Default = () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} total={140} pageSize={10} onChange={page => setPage(page)} />;
};
