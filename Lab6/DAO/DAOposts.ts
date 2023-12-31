import { connection } from '../Datasource/Datasource';
import { PostEntity } from '../Entities/EntityPosts';

export async function createPost(post: PostEntity): Promise<PostEntity> {
  return connection.manager.save(PostEntity, post);
}

export async function findAllPosts(): Promise<PostEntity[]> {
  return connection.manager.find(PostEntity);
}

export async function findPostById(id: number): Promise<PostEntity | null> {
  return connection.manager.findOne(PostEntity, {
    where: { id },
  });
}

export async function updatePost(post: PostEntity): Promise<PostEntity> {
  return connection.manager.save(PostEntity, post);
}

export async function deletePost(id: number): Promise<void> {
  await connection.manager.delete(PostEntity, id);
}
