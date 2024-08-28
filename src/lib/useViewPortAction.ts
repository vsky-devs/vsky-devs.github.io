const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
        entry.target.dispatchEvent(new CustomEvent(eventName));
    });
});


export default function viewport(element: HTMLElement) {
    observer.observe(element)
    return {
       destroy() {
        observer.unobserve(element);
       } 
    }
}