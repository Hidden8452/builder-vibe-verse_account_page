import { Search, ArrowLeft, ArrowRight, ChevronDown, Heart, Share2, MoreHorizontal, Instagram, Facebook, Twitter, Upload, Globe, ArrowUpRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="w-full bg-background border-b border-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-22 py-5">
          <div className="flex items-center justify-between">
            {/* Logo and Search */}
            <div className="flex items-center gap-10">
              <div className="w-32 h-6 bg-gradient-text"></div>
              <div className="relative flex items-center w-96 border-2 border-secondary bg-background rounded px-4 py-2">
                <Search className="w-6 h-6 text-text-light mr-3" />
                <input 
                  type="text" 
                  placeholder="Search by tags, themes, artists, etc"
                  className="flex-1 bg-transparent text-text-muted placeholder-text-muted outline-none"
                />
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="flex items-center gap-8">
              <span className="text-text-light font-medium">Market</span>
              <div className="flex items-center gap-1">
                <span className="text-white font-medium">Activity</span>
                <ChevronDown className="w-4 h-4 text-white" />
              </div>
              <span className="text-primary font-medium">Account</span>
              <button className="px-8 py-2 border border-primary text-text-lighter font-semibold hover:bg-primary hover:text-background transition-colors">
                Connect
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-background border-b border-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-22 py-22">
          <div className="flex items-start justify-between">
            {/* Main Title */}
            <div className="flex-1 max-w-4xl">
              <div className="space-y-6">
                <h1 className="font-display text-6xl lg:text-8xl font-bold leading-tight">
                  <span className="text-white">Start earning today on</span>
                  <br />
                  <span className="gradient-text text-right block mt-4">ADVERTISING</span>
                  <br />
                  <span className="gradient-text text-5xl lg:text-8xl font-normal">EXCHANGE</span>
                </h1>
              </div>
              
              {/* CTA Button */}
              <div className="mt-16">
                <button className="bg-primary text-background px-16 py-20 font-display text-4xl font-normal">
                  Current data
                </button>
              </div>
            </div>

            {/* CTA Sidebar */}
            <div className="w-89 bg-secondary border border-secondary p-12">
              <p className="text-text-dimmed text-xl leading-relaxed">
                Become a verified ad space provider and start earning passively today.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-16 mt-24">
            <div className="text-center">
              <div className="font-display text-4xl font-normal text-white">163.34 BTC</div>
              <div className="text-text-dimmed-2 text-xl mt-2">Lifetime earnings</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-normal text-white">1365</div>
              <div className="text-text-dimmed-2 text-xl mt-2">Sales</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-normal text-white">34</div>
              <div className="text-text-dimmed-2 text-xl mt-2">Locations</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-normal text-white">2300</div>
              <div className="text-text-dimmed-2 text-xl mt-2">Active items</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newest Listings Section */}
      <section className="bg-background border-b border-secondary">
        <div className="flex">
          {/* Main Content */}
          <div className="flex-1 p-22">
            <div className="flex items-center justify-between mb-22">
              <h2 className="font-display text-4xl font-normal text-white">Newest Listings</h2>
              <div className="flex gap-2">
                <button className="p-3 border border-primary bg-background">
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>
                <button className="p-3 border border-primary bg-background">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            <div className="border border-secondary p-8 flex gap-8">
              {/* Left Content */}
              <div className="flex-1 py-8">
                <div className="space-y-6">
                  <h3 className="font-display text-6xl font-bold text-white leading-tight">
                    NY, Times Square 3D Giga LED
                  </h3>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-400"></div>
                    <span className="text-text-lighter text-sm">by MAX Bilboards</span>
                  </div>
                  
                  <p className="text-text-dimmed">
                    New York, Times square. December 2025. Giga 3D LED Screen.
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-text-muted">
                      355 biddings. 35 in last hour<br />
                      Auction Ends in 48 hours
                    </p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 border border-secondary text-white text-sm">#NY</span>
                      <span className="px-2 py-1 border border-secondary text-white text-sm">#hot spot</span>
                      <span className="px-2 py-1 border border-secondary text-white text-sm">#3D</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <span className="text-text-muted">Views: 10k</span>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-3 py-2 border border-primary text-white text-sm">
                      <Heart className="w-4 h-4" />
                      1.k
                    </button>
                    <button className="p-2 border border-primary">
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-2 border border-primary">
                      <MoreHorizontal className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Center Image */}
              <div className="flex-1">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2cc4212920d0e9ac9c4309a13029e75333071e76?width=892" 
                  alt="Times Square LED Display"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-96 bg-background-secondary border-l border-secondary p-8">
            <div className="space-y-6">
              <div className="space-y-6">
                <div className="flex justify-between">
                  <div>
                    <div className="text-text-dimmed-2 text-sm">Ask Price</div>
                    <div className="font-display text-xl text-white">1.00 BTC</div>
                  </div>
                  <div>
                    <div className="text-text-dimmed-2 text-sm font-bold">Last Bid</div>
                    <div className="font-display text-xl text-white">2,354 BTC</div>
                  </div>
                </div>
                
                <button className="w-full bg-primary text-background py-2 px-8 font-semibold">
                  Change price
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="text-text-dimmed-2 text-lg">10 people already bidded</h4>
                
                <div className="space-y-4">
                  {[
                    { amount: "1.00 BTC", user: "@JorgeLRZ" },
                    { amount: "0.90 BTC", user: "@Gregorz" },
                    { amount: "0.82 BTC", user: "@LaylazR9" },
                    { amount: "0.79 BTC", user: "@Mortaly" }
                  ].map((bid, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                      <div>
                        <div className="text-white font-bold">{bid.amount}</div>
                        <div className="text-text-dimmed text-sm opacity-80">{bid.user}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <p className="text-red-500 font-display text-3xl font-normal opacity-80">List new dates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Earnings Section */}
      <section className="bg-background border-b border-secondary">
        <div className="flex">
          {/* Left Sidebar */}
          <div className="w-[508px] bg-background-secondary border-r border-secondary p-22">
            <div className="space-y-9">
              <div>
                <h2 className="font-display text-5xl font-semibold text-text-lighter">My Earnings</h2>
                <div className="flex items-center gap-3 mt-1">
                  <span className="font-display text-4xl font-semibold gradient-text">TODAY</span>
                  <div className="w-10 h-10 rounded-full bg-accent-dark-green flex items-center justify-center">
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-text-dimmed">Most Selling</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-primary"></div>
                  <span className="text-primary text-xl font-medium">Most Earning</span>
                </div>
                <div className="text-text-dimmed">Most Followed</div>
                <div className="text-text-dimmed">Most Favorited</div>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex items-center gap-2 text-primary">
                <span>More Advertisements</span>
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="flex-1 p-22">
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-secondary pb-6">
                <div className="space-y-1">
                  <div className="text-primary">1.2 BTC</div>
                  <div className="text-text-dimmed-2">Exchange fees 0.006BTC</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center border-b border-secondary pb-6">
                <div className="space-y-1">
                  <div className="text-white">3 Auctions finished</div>
                  <div className="text-text-dimmed-2">1540 Bids</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <div className="text-white">1 spot sales</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-[474px] p-22">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/84fdce661270b72c16c9864db748bc7febfcabef?width=792" 
              alt="Artist Profile"
              className="w-full h-96 object-cover mb-8"
            />
            
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-4xl font-medium text-white">Saber Distillery a.s.</h3>
                <div className="flex items-center gap-6 mt-3">
                  <span className="gradient-text text-xl">@SABER</span>
                  <span className="text-text-dimmed text-xl">0x63fc...5f27</span>
                </div>
                <p className="text-text-dimmed-2 mt-3">Lifetime earnings 163.34 BTC</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <Instagram className="w-6 h-6 text-white" />
                  <Facebook className="w-6 h-6 text-white" />
                  <Twitter className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <span>View Advertisement</span>
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Builder Section */}
      <section className="bg-background p-22 text-center border-b border-secondary">
        <h2 className="font-display text-6xl font-normal text-white mb-8">Portfolio builder</h2>
        
        <div className="grid grid-cols-4 gap-8 mb-8">
          {[
            { title: "New York, Times square", status: "HOT", price: "3.00 BTC", likes: "2.7 k", owner: "NY AdBros inc." },
            { title: "Hong Kong, Wang Street", status: "Featured", price: "3.00 BTC", likes: "3.5 k", owner: "Wolfgang Slashhaut" },
            { title: "Tokyo, Shibuya", price: "3.00 BTC", likes: "890", owner: "Bambietta Basterbine" },
            { title: "Dubai, Airport", price: "3.00 BTC", likes: "24", owner: "Berenice Gabrielli" }
          ].map((item, index) => (
            <div key={index} className="border-2 border-secondary bg-background">
              <div className="relative">
                <img 
                  src={`https://api.builder.io/api/v1/image/assets/TEMP/${index === 0 ? 'a41e3c7bdaf886b77349adb0d8f747a01531530c' : index === 1 ? '91040dd6b1740bb130ca1a37c6aa23ae6b878d4a' : index === 2 ? '54db23c01abbced5a61ce059b888b7ccf11a6aad' : 'b44c864936150793ecabe22f1b816ed5e669e8b1'}?width=584`}
                  alt={item.title}
                  className="w-full h-76 object-cover"
                />
                {item.status && (
                  <div className={`absolute top-4 left-4 px-2 py-1 text-sm ${item.status === 'HOT' ? 'bg-accent-dark-purple text-accent-light-purple' : 'bg-accent-dark-pink text-pink-400'}`}>
                    {item.status}
                  </div>
                )}
              </div>
              
              <div className="p-4 space-y-2">
                <h3 className="text-white text-xl font-medium">{item.title}</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-green-400">SPOT price</span>
                    <span className="text-accent-light-yellow ml-2">{item.price}</span>
                  </div>
                  <span className="text-text-dimmed-2">Available</span>
                </div>
                
                <hr className="border-secondary" />
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-400 relative">
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border border-background"></div>
                    </div>
                    <span className="text-text-dimmed text-sm">{item.owner}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-pink-400" />
                    <span className="text-text-dimmed text-sm">{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="px-8 py-2 border border-primary text-white font-semibold">
          View More
        </button>
      </section>

      {/* Action Buttons Section */}
      <section className="bg-background p-22">
        <div className="grid grid-cols-2 gap-32">
          <div className="space-y-16">
            {/* Upload Portfolio */}
            <div className="text-center space-y-4">
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 border-2 border-primary rounded-full opacity-30"></div>
                <Upload className="w-10 h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-white text-xl font-medium">Upload portfolio</h3>
              <p className="text-text-dimmed-2">Add new items into your portfolio</p>
            </div>

            {/* Transfer Ownership */}
            <div className="text-center space-y-4">
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 border-2 border-primary rounded-full opacity-30"></div>
                <Globe className="w-10 h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-white text-xl font-medium">Transfer portfolio items ownership</h3>
              <p className="text-text-dimmed-2">You can transfer item ownership to another seller</p>
            </div>

            {/* List Market Items */}
            <div className="text-center space-y-4">
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 border-2 border-primary rounded-full opacity-30"></div>
                <Globe className="w-10 h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-white text-xl font-medium">List market items</h3>
              <p className="text-text-dimmed-2">Create auctions, spot or forward listing</p>
            </div>

            {/* Delist Market Items */}
            <div className="text-center space-y-4">
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 border-2 border-primary rounded-full opacity-30"></div>
                <Globe className="w-10 h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <h3 className="text-white text-xl font-medium">Delist market items</h3>
              <p className="text-text-dimmed-2">Delist already market listed items</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-background border-2 border-secondary p-8 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-text-dimmed text-sm mb-2 opacity-70">Ask price</label>
                <div className="space-y-4">
                  <div className="relative">
                    <div className="h-4 bg-white opacity-10 rounded-full"></div>
                    <div className="absolute top-0 h-4 bg-brand-blue rounded-full" style={{width: '53%'}}></div>
                    <div className="absolute top-0 left-[53%] transform -translate-x-1/2 -mt-6">
                      <div className="bg-text-lighter px-2 py-1 text-xs text-background font-bold">5 ETH</div>
                      <div className="w-6 h-6 bg-brand-blue rounded-full border-4 border-text-lighter shadow-lg"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-white text-sm">
                    <span>0.01 ETH</span>
                    <span>10 ETH</span>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-text-dimmed text-sm mb-2 opacity-70">Create Listing</label>
                <select className="w-full p-2 border-2 border-secondary bg-background text-white">
                  <option>Auction</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-text-dimmed text-sm mb-2 opacity-70">Time interval</label>
                <select className="w-full p-2 border-2 border-secondary bg-background text-white">
                  <option>1 week</option>
                </select>
              </div>
              
              <div>
                <label className="block text-text-dimmed text-sm mb-2 opacity-70">Region</label>
                <select className="w-full p-2 border-2 border-secondary bg-background text-white">
                  <option>New York</option>
                </select>
              </div>
              
              <div>
                <label className="block text-text-dimmed text-sm mb-2 opacity-70">Type</label>
                <select className="w-full p-2 border-2 border-secondary bg-background text-white">
                  <option>Megaboard</option>
                </select>
              </div>
              
              <div>
                <label className="block text-text-dimmed text-sm mb-2 opacity-70">Date start</label>
                <select className="w-full p-2 border-2 border-secondary bg-background text-white">
                  <option>22.5.2025</option>
                </select>
              </div>
              
              <div>
                <label className="block text-text-dimmed text-sm mb-2 opacity-70">Date end</label>
                <select className="w-full p-2 border-2 border-secondary bg-background text-white">
                  <option>22.6.2025</option>
                </select>
              </div>
              
              <div>
                <label className="block text-text-dimmed text-sm mb-2 opacity-70">Choose portfolio item</label>
                <select className="w-full p-2 border-2 border-secondary bg-background text-white">
                  <option>NY, Time Square, ID. GL2230912778</option>
                </select>
              </div>
            </div>

            <button className="w-full py-2 px-8 border-4 border-primary bg-background text-red-500 font-display text-4xl font-normal shadow-text">
              List Item
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-background p-22 text-center border-b border-secondary">
        <div className="mb-10">
          <h2 className="font-display text-4xl font-normal text-text-lighter inline-block mr-4">
            HOW IT WORKS FOR
          </h2>
          <div className="inline-flex items-center gap-3">
            <span className="font-display text-4xl font-normal gradient-text">ADVERTISERS</span>
            <div className="w-10 h-10 rounded-full bg-accent-dark-green flex items-center justify-center">
              <ChevronDown className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-16 mb-10">
          <div className="text-center space-y-4">
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 border-2 border-primary rounded-full opacity-30"></div>
              <Upload className="w-10 h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 className="text-white text-xl font-medium">Upload your advertising portfolio</h3>
            <p className="text-text-dimmed-2 w-64 mx-auto">Upload and list your advertisement space by creating an account. Verify business status and start selling ad space.</p>
          </div>

          <div className="text-center space-y-4">
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 border-2 border-primary rounded-full opacity-30"></div>
              <svg className="w-10 h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              </svg>
            </div>
            <h3 className="text-white text-xl font-medium">Fill out info, create spot listing</h3>
            <p className="text-text-dimmed-2 w-64 mx-auto">Fill out the required info and set for pricing and buying option</p>
          </div>

          <div className="text-center space-y-4">
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 border-2 border-primary rounded-full opacity-30"></div>
              <Globe className="w-10 h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 className="text-white text-xl font-medium">Auctions and forward pricing</h3>
            <p className="text-text-dimmed-2 w-64 mx-auto">Create time locked forwards and sell your ad space in separate forwards in advance.</p>
          </div>
        </div>

        <button className="bg-primary text-background px-8 py-2 font-semibold">
          Start selling now
        </button>
      </section>

      {/* CTA Banner */}
      <section className="bg-background p-22">
        <div className="relative w-full h-72 rounded-lg overflow-hidden">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/1f171029ad96b7146fdde59027307efec6a5fe46?width=2528"
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center space-y-6">
              <div>
                <div className="text-white font-bold mb-2">ARE YOU AD SPACE PROVIDER?</div>
                <h2 className="font-display text-4xl font-normal text-white">Easy ad space trading worldwide</h2>
              </div>
              <button className="bg-white text-background px-8 py-2 font-semibold">
                Become seller
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-secondary border-t border-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-22 py-16">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-white text-2xl font-bold mb-8">The New Creative Economy.</h3>
            </div>

            <div className="flex gap-16">
              <div>
                <h4 className="text-white font-medium mb-5">Stacks</h4>
                <div className="space-y-6">
                  <div className="text-text-dimmed-2">Discover</div>
                  <div className="text-text-dimmed-2">Connect wallet</div>
                  <div className="text-text-dimmed-2">Create item</div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-medium mb-5">Info</h4>
                <div className="space-y-6">
                  <div className="text-text-dimmed-2">Download</div>
                  <div className="text-text-dimmed-2">Demos</div>
                  <div className="text-text-dimmed-2">Support</div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-medium mb-5">Join Newsletter</h4>
                <p className="text-white mb-6 w-88">Subscribe our newsletter to get more free design course and resource</p>
                <div className="flex border-2 border-secondary p-1">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent text-text-muted placeholder-text-muted outline-none px-4"
                  />
                  <button className="bg-primary p-2">
                    <ArrowRight className="w-4 h-4 text-background" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-secondary my-8 opacity-70" />
          
          <div className="text-white text-sm opacity-70">
            Copyright © 2021 UI8 LLC. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
