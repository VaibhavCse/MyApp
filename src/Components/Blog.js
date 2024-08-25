import React, { useState } from 'react';
import './BlogPage.css';

const BlogPage = () => {
    // Sample blog posts data with organic foods content
    const [posts] = useState([
        {
            id: 1,
            title: 'The Benefits of Eating Organic',
            date: 'August 18, 2024',
            content: `Eating organic foods has become increasingly popular as people strive for healthier lifestyles. Organic foods are grown without the use of synthetic pesticides, fertilizers, or genetically modified organisms (GMOs). This means they are better for your health and the environment. Organic farming practices also promote soil health, water conservation, and reduce pollution. Discover why making the switch to organic can be beneficial for you and the planet.`
        },
        {
            id: 2,
            title: 'How to Transition to an Organic Diet',
            date: 'August 10, 2024',
            content: `Transitioning to an organic diet can be overwhelming, but it doesn’t have to be. Start by incorporating more organic fruits and vegetables into your meals. Gradually replace processed foods with organic whole foods, and choose organic dairy and meat products. Shopping at local farmers' markets or joining a CSA (Community Supported Agriculture) can also help you access fresh organic produce. This guide will walk you through simple steps to make the transition smoother.`
        },
        {
            id: 3,
            title: 'Organic Farming: Sustainability and the Future',
            date: 'July 28, 2024',
            content: `Organic farming is not just a method of agriculture; it's a way to preserve our future. By avoiding chemical inputs and focusing on natural processes, organic farming supports biodiversity, improves soil health, and reduces carbon emissions. This post explores how organic farming contributes to a sustainable future and why it's vital for the health of our planet and future generations. Learn about the principles of organic farming and its role in combating climate change.`
        },
        {
            id: 4,
            title: 'Debunking Myths About Organic Food',
            date: 'July 15, 2024',
            content: `There are many myths surrounding organic food, such as it being too expensive or not any healthier than conventional food. In this post, we debunk some of the most common misconceptions about organic food. You'll learn about the true benefits of organic eating, including its impact on health, the environment, and the economy. We also address concerns about cost and offer tips for making organic food more affordable.`
        }
    ]);

    const [selectedPost, setSelectedPost] = useState(null);

    // Handle selecting a post
    const handleSelectPost = (post) => {
        setSelectedPost(post);
    };

    return (
        <div className="blog-container">
            <header className="blog-header">
                <h1>Organic Foods Blog</h1>
            </header>
            <div className="blog-content">
                <aside className="blog-sidebar">
                    <h2>Recent Posts</h2>
                    <ul className="blog-list">
                        {posts.map(post => (
                            <li key={post.id} onClick={() => handleSelectPost(post)} className="blog-list-item">
                                {post.title}
                            </li>
                        ))}
                    </ul>
                </aside>
                <main className="blog-main">
                    {selectedPost ? (
                        <div className="blog-post">
                            <h2 className="post-title">{selectedPost.title}</h2>
                            <p className="post-date">{selectedPost.date}</p>
                            <p className="post-content">{selectedPost.content}</p>
                        </div>
                    ) : (
                        <p>Select a post to read.</p>
                    )}
                </main>
            </div>
        </div>
    );
};

export default BlogPage;
