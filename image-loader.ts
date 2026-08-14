// Кастомный loader для next/image при статическом экспорте на GitHub Pages.
// Сайт живёт по подпути /chok-site/, поэтому unoptimized-режим сам по себе
// не добавляет basePath к src картинок — делаем это здесь вручную.
export default function githubPagesLoader({ src }: { src: string }) {
  const basePath = "/chok-site";
  return `${basePath}${src}`;
}
