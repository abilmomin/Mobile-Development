// lib/supabase_crud.ts
import { supabase } from './supabase'

const TABLE = 'sampledatabase'

export const getUsers = async () => {
  const { data, error } = await supabase.from(TABLE).select('*')
  if (error) console.error('Fetch error:', error)
  return data
}

export const addUser = async (user: { name: string; age: number; email: string }) => {
  const { data, error } = await supabase.from(TABLE).insert([user])
  if (error) console.error('Add error:', error)
  return data
}

export const updateUser = async (id: number, updates: Partial<{ name: string; age: number; email: string }>) => {
  const { data, error } = await supabase.from(TABLE).update(updates).eq('id', id)
  if (error) console.error('Update error:', error)
  return data
}

export const deleteUser = async (id: number) => {
  const { data, error } = await supabase.from(TABLE).delete().eq('id', id)
  if (error) console.error('Delete error:', error)
  return data
}