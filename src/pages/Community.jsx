import React, { useState } from 'react';

export default function HerDharaCommunityHub() {
  const [postContent, setPostContent] = useState('');

  const posts = [
    {
      id: 1,
      author: 'Priya Sharma',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSS2Tv0C6sezRsXf18TyyKyz1S1Y_DeHH8CKdtMY9lmXuI3vhyFPmBn2PslYP7XUJh-npkVGkCSXvyBOUhsdyCRNm-MtmJhMBgNRkSFh3AxAovnIAglHBIWu1bHKDc-kZT_Jgg4SmpiCuphU6L0tfBAbG-fpB32sr_QB11W3fzbosJMpLPlmNbwGRK58GVDa7ont2ULZFq2K86FX8UbZLmsvYSDPCmXGe1JyA5kKpCBYAsoOvGeRo4TlgpsGPeBqQpLLdoBennNQg',
      time: '2 hours ago',
      title: 'My First Batch of Handmade Soaps!',
      content: "So excited to share my first successful batch of handmade soaps! A huge thank you to everyone in the 'Handicraft Artists' group for the tips and encouragement.",
      tags: ['#MySuccessStory', '#WomenInBusiness'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCc6scVAS3LKYMmrEuigs9BTvqX-0Yw__8hJmLS-LKR8n5U9WBvDXrMKqeqo9yjBs_eXZ2TdPNrhWcSeY2XpK4b3uAuQBZgm-xCHEyVqefMRy1u4YwoQzFezwqY3tjiPNIoouWFU6GrFjBJu97IZet5zmKh4psURZYOK1EykjdcWQaXQDVMCJvG8NU60udBie4lQLVFCCatoMcFDNR_hF2ndU8VkD6_8TOghhJ3HTeamf8-QmBX13drJNR71FFGOmK689qL2ykoJgs',
      likes: 152,
      comments: 45,
      shares: 18
    },
    {
      id: 2,
      author: 'Anita Devi',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaTaYYIbvotLkRk0_Lwn23hT7x56X7S2eac2i3Hb0b_Mb4eYA67oRI1rY21ViA5gh6y5Ad5lVzfKE34Cru8sMboBBQ2DWIM6rzrVwoJ7hyX4hGYY1XXVm-mHn8BdP35C3V1dD7q2FbnbnR1WprRwfV2Qj2CUyfmhUifJB62kEufbRhtAcOAfBqVndZqj-hmT6OWvBOfrH0fdIWEBKmHL9mC9ufAFra5wrUc28n1oH-3_gKYYo2Kl5jlaX7nhmcQ2b79QrukZscUuI',
      time: '5 hours ago',
      title: 'Question about digital marketing for my small shop',
      content: "Hello everyone, I have a question about how to use social media to promote my small shop. I'm finding it difficult to reach new customers. Any advice would be greatly appreciated!",
      tags: ['#AskForHelp', '#DigitalSkills'],
      image: null,
      likes: 89,
      comments: 112,
      shares: 9
    }
  ];

  const myGroups = [
    { name: 'Handicraft Artists', icon: 'palette', color: 'teal' },
    { name: 'New Business Owners', icon: 'storefront', color: 'orange' },
    { name: 'Digital Skills Learners', icon: 'school', color: 'sky' }
  ];

  const trendingTopics = [
    { tag: '#SkillSharing', posts: '1,204 posts' },
    { tag: '#WomenInBusiness', posts: '987 posts' },
    { tag: '#FarmingInnovators', posts: '752 posts' }
  ];

  const upcomingEvents = [
    { month: 'JUL', day: '28', title: 'Digital Marketing Workshop', location: 'Online via Zoom' },
    { month: 'AUG', day: '05', title: 'Financial Literacy Q&A', location: 'Community Call' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 h-16 flex items-center justify-center">
        {/* ...header content remains the same */}
      </header>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-screen-xl p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">My Groups</h3>
                <nav className="space-y-2">
                  {myGroups.map((group, idx) => (
                    <a key={idx} href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-900 hover:bg-gray-50">
                      <span className={`h-6 w-6 rounded bg-${group.color}-100 text-${group.color}-600 flex items-center justify-center text-sm`}>
                        {group.icon === 'palette' && '🎨'}
                        {group.icon === 'storefront' && '🏪'}
                        {group.icon === 'school' && '🎓'}
                      </span>
                      <span className="text-sm font-medium">{group.name}</span>
                    </a>
                  ))}
                </nav>
                <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-bold hover:bg-purple-100">
                  <span>➕</span>
                  Discover Groups
                </button>
              </div>
            </div>
          </aside>

          {/* Center Feed */}
          <div className="col-span-1 lg:col-span-6 space-y-6">
            {/* Composer */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-4">
                <div
                  className="h-10 w-10 rounded-full bg-cover bg-center flex-shrink-0"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPGDEITkvT9w33E3ydH56lUHPu7CfehENP-SRqDkne2_MxoxzQpARE2TL7eLKFL60MhdS-TA4318ZSmWvi5BubblyG0ROeBmLuMAg-RGvFFi-1fS6J7v4os220SuCphZNm8iQC1sg4yB_QPeACwiWo93u-GUIxMBIyXNpTYTBj0lO7wRBjtynOOkxpqPMwKloEQOxzudVwZj4KJabQp4VvauN9sxuH1fAK12_kDT-SMDYTdsiobd88-MYqEXMQCmXYAIEqGTGUeFE')"
                  }}
                ></div>
                <div className="flex-1">
                  <textarea
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    placeholder="Share your story, Anjali..."
                    rows="3"
                    className="w-full p-3 rounded bg-gray-50 border-none resize-none text-base focus:outline-none focus:ring-2 focus:ring-purple-600"
                  ></textarea>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gray-500">
                      <button className="h-8 w-8 rounded-full hover:bg-gray-50 flex items-center justify-center">🖼</button>
                      <button className="h-8 w-8 rounded-full hover:bg-gray-50 flex items-center justify-center">🏷</button>
                      <button className="h-8 w-8 rounded-full hover:bg-gray-50 flex items-center justify-center">😊</button>
                    </div>
                    <button className="px-6 h-9 rounded-full bg-purple-600 text-white text-sm font-bold hover:bg-purple-700">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts */}
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.avatar})` }}
                  ></div>
                  <div>
                    <p className="font-bold text-gray-900">{post.author}</p>
                    <p className="text-xs text-gray-500">{post.time}</p>
                  </div>
                </div>
                <div className="py-4">
                  <p className="mb-4 text-base font-bold text-gray-900">{post.title}</p>
                  <p className="mb-4 text-gray-600">{post.content}</p>
                  <div className="flex gap-2">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-sm font-medium text-purple-600 cursor-pointer hover:underline">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {post.image && (
                  <div
                    className="w-full aspect-video rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.image})` }}
                  ></div>
                )}
                <div className="flex justify-between border-t border-gray-200 pt-2 mt-4">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-500 hover:bg-gray-50">
                    <span>👍</span>
                    <p className="text-xs font-bold">{post.likes}</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-500 hover:bg-gray-50">
                    <span>💬</span>
                    <p className="text-xs font-bold">{post.comments}</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-500 hover:bg-gray-50">
                    <span>🔗</span>
                    <p className="text-xs font-bold">{post.shares}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Trending Topics</h3>
                <div className="space-y-3">
                  {trendingTopics.map((topic, idx) => (
                    <div key={idx}>
                      <p className="font-bold text-gray-900">{topic.tag}</p>
                      <p className="text-xs text-gray-500">{topic.posts}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="h-12 w-12 flex flex-col items-center justify-center rounded-lg bg-red-50 text-red-500">
                        <span className="text-sm font-bold">{event.month}</span>
                        <span className="text-lg font-extrabold">{event.day}</span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{event.title}</p>
                        <p className="text-xs text-gray-500">{event.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
