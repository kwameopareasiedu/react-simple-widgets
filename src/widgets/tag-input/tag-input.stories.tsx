import React, { useState } from "react";
import { TagInput } from "./tag-input";

export default { title: "TagInput", component: TagInput };

export const Default = (): any => {
  const [tags, setTags] = useState([]);

  return <TagInput className="form-control" placeholder="Enter tags" value={tags} onChange={setTags} />;
};
