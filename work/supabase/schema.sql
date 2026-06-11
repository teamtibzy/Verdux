create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  company text,
  created_at timestamptz not null default now()
);

create unique index if not exists waitlist_email_key
  on public.waitlist (lower(email));

alter table public.waitlist enable row level security;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'waitlist'
      and policyname = 'Service role can manage waitlist'
  ) then
    create policy "Service role can manage waitlist"
      on public.waitlist
      for all
      using (auth.role() = 'service_role')
      with check (auth.role() = 'service_role');
  end if;
end $$;
