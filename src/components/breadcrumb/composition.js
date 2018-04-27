export const formatItm = ({ url, active, ...item }, index, { length }) => {
  const last = index === length - 1;

  return {
    url: url || (last ? window.location.href : ''),
    active: active || last,
    ...item,
  };
};

export default {
  name: 'Breadcrumb',
  props: ['items'],
  computed: {
    fragments: function() {
      return this.items.map(formatItm);
    },
  },
};
