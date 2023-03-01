import { component$ } from '@builder.io/qwik';
import { useLocation, type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const loc = useLocation()

  return (<>
    <h1>Product {loc.params['id']}</h1>
  </>);
});

export const head: DocumentHead = {
  title: 'Products',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
