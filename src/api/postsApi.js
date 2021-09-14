import BASE_URL from "api/baseUrls.const";

export async function fetchPosts() {
  const response = await fetch(`${BASE_URL.MAIN}/posts`);
  return response.json();
}

export async function fetchPost(id) {
  const response = await fetch(`${BASE_URL.MAIN}/posts/${id}`);
  return response.json();
}

export async function fetchComments(postId) {
  const response = await fetch(`${BASE_URL.MAIN}/comments?postId=${postId}`);
  return response.json();
}

export async function fetchAddPost({ title, body }) {
  const response = await fetch(`${BASE_URL.MAIN}/posts`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json' 
    },
    body: JSON.stringify({
      // id: 102,
      // userId: 1,
      title,
      body
    })
  });
  return response.json();
}

export async function fetchUpdatePost({ title, body, id, userId }) {
  const response = await fetch(`${BASE_URL.MAIN}/posts/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json' 
    },
    body: JSON.stringify({
      title,
      body
    })
  });
  return response.json();
}
