interface Posts {
    title: string;
    author: string;
    body: string;
    created_at: FirebaseFirestore.Timestamp;
    updated_at: FirebaseFirestore.Timestamp;
    banner?: string;
    tags?: Array<string>;
}

export default Posts;
