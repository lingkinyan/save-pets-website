export class IntersectionComponents {
  onVisible(session: string) {
    const content = document.querySelector('.' + session) as Element;
    content.classList.add('show-content');
  }
}
