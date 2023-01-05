import { useEffect } from 'react';

export function useInitIssue() {
  const emptyIssues = [
    {
      id: 1,
      title: 'first issue~~',
      contents: 'contents contents contents',
      status: 'TO_DO',
      date: 'Dec 22',
      member: 'tiger',
    },
  ];
  const baseMember = ['navi', 'cat the meow', 'tiger'];

  if (localStorage.getItem('issues')) return;

  useEffect(() => {
    localStorage.setItem('issues', JSON.stringify(emptyIssues));
    localStorage.setItem('members', JSON.stringify(baseMember));
  }, []);
}

export function useCreateIssue() {}

export function useReadIssues() {}

export function useUpdateIssue() {}

export function useDeleteIssue() {}
