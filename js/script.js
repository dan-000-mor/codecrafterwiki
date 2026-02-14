
// Tailwind Configuration
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd', 
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        python: {
          blue: '#306998',
          yellow: '#FFD43B'
        }
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Logic
  const menuButton = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Blog List Logic
  const blogGrid = document.getElementById('blog-grid');
  if (blogGrid && typeof blogPosts !== 'undefined') {
    blogPosts.forEach(post => {
      const article = document.createElement('article');
      article.className = 'flex flex-col rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-2xl bg-white';
      
      const tagsHtml = post.tags.map(tag => 
        `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-100 text-brand-800">${tag}</span>`
      ).join('');

      // Use post.url if it exists, otherwise fallback to index/post pattern (though we are moving to direct files)
      const postLink = post.url ? post.url : `post.html?id=${post.id}`;

      article.innerHTML = `
        <div class="flex-shrink-0 h-48 w-full bg-gray-200 relative overflow-hidden">
           <img class="h-full w-full object-cover" src="https://picsum.photos/seed/${post.id}/600/400" alt="${post.title}">
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <div class="flex flex-wrap gap-2 mb-3">
               ${tagsHtml}
            </div>
            <a href="${postLink}" class="block mt-2">
              <p class="text-xl font-semibold text-gray-900 hover:text-brand-600 transition-colors">${post.title}</p>
              <p class="mt-3 text-base text-gray-500 line-clamp-3">${post.excerpt}</p>
            </a>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <div class="h-10 w-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 font-bold">
                 ${post.author.charAt(0)}
              </div>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">${post.author}</p>
              <div class="flex space-x-1 text-sm text-gray-500">
                <time>${post.date}</time>
              </div>
            </div>
          </div>
        </div>
      `;
      blogGrid.appendChild(article);
    });
  }
});
