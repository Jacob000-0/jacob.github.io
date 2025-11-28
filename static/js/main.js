document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 自动更新 Footer 年份
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. 模拟博客文章数据
    const posts = [
        {
            title: "Analysis of Smart Grid Stability",
            date: "2025-05-12",
            category: "Research",
            summary: "Exploring the impact of renewable energy integration on grid frequency stability..."
        },
        {
            title: "My Workflow with Python & MATLAB",
            date: "2025-04-28",
            category: "Coding",
            summary: "How I set up my development environment for power system simulations."
        },
        {
            title: "Reflections on Year 2024",
            date: "2025-01-01",
            category: "Life",
            summary: "A summary of what I learned and achieved in the past year as a researcher."
        }
    ];

    // 3. 渲染文章列表
    const postListContainer = document.getElementById('post-list');

    if (postListContainer) {
        // 清空 Loading 文字
        postListContainer.innerHTML = '';

        posts.forEach(post => {
            // 创建 article 元素
            const article = document.createElement('article');
            article.className = 'post-card';

            // 填充内容
            article.innerHTML = `
                <h3 class="post-title">
                    <a href="#">${post.title}</a>
                </h3>
                <div class="post-meta">
                    <span>📅 ${post.date}</span> | 
                    <span>🏷️ ${post.category}</span>
                </div>
                <p class="post-summary">${post.summary}</p>
            `;

            // 添加到容器
            postListContainer.appendChild(article);
        });
    }
});