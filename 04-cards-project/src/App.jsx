import React from 'react'
import Card from '../components/card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://www.bing.com/ck/a?!&&p=dc6f2e85d767218bae2f49664cc295d467184cdea3d639e9eaffc5264c6ee55fJmltdHM9MTc3NDQ4MzIwMA&ptn=3&ver=2&hsh=4&fclid=309da01a-e8ad-6dab-0e73-b63fe9556c3e&u=a1L2ltYWdlcy9zZWFyY2g_cT1zYWxlc2ZvcmNlK2xvZ28maWQ9NTcxNDIwODkxRjM5QkZGQTA4NDg3MDM0NzkwOENEREQ3N0M0NkYzMCZGT1JNPUlRRlJCQQ",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://www.bing.com/ck/a?!&&p=711c8725125b2c0d0973732ec1ee2afe83a3afc80dd45136e331d2926fbbb8d9JmltdHM9MTc3NDQ4MzIwMA&ptn=3&ver=2&hsh=4&fclid=309da01a-e8ad-6dab-0e73-b63fe9556c3e&u=a1L2ltYWdlcy9zZWFyY2g_cT1hcHBsZStsb2dvJmlkPTEwQzI4MDEwRjgzNTM2NTU5Nzg3OEZDRUE2QUY3MEIzQUE4QTI0Q0MmRk9STT1JUUZSQkE",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://th.bing.com/th?q=Microsoft+Logo+Wallpaper+4K&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "data:image/webp;base64,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",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://th.bing.com/th/id/OIP.ltCEzTl3R1VsC1iJvDc4bgEsEs?w=213&h=213&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      companyName: "Meta",
      datePosted: "10 days ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://www.bing.com/ck/a?!&&p=6ac5f06e55586629027dc3728fc7afdf3e37ce6125afb97e103e98f17c846e19JmltdHM9MTc3NDQ4MzIwMA&ptn=3&ver=2&hsh=4&fclid=309da01a-e8ad-6dab-0e73-b63fe9556c3e&u=a1L2ltYWdlcy9zZWFyY2g_cT1uZXRmbGl4K2xvZ28maWQ9MDIxRTVBRjU1MENDNjM4MkJCNUI3RjgzQ0RGNzE5RUE5MDAyQUFCNSZGT1JNPUlRRlJCQQ",
      companyName: "Netflix",
      datePosted: "4 weeks ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Los Angeles, USA"
    },
    {
      brandLogo: "https://www.bing.com/ck/a?!&&p=72a919b7040503c19ddac7cd9d5a79434bb1dee585e33ab3efdffdb2e2efab0bJmltdHM9MTc3NDQ4MzIwMA&ptn=3&ver=2&hsh=4&fclid=309da01a-e8ad-6dab-0e73-b63fe9556c3e&u=a1L2ltYWdlcy9zZWFyY2g_cT10ZXNsYStsb2dvJmlkPTcyNTBGM0UzQUIzMzgzODc5RUMyMjU1NkM3OUREOUU1ODgwOEMzNkImRk9STT1JUUZSQkE",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://th.bing.com/th/id/OIP.ZztV5ULkLdX0NlWLA8j4YgHaFj?w=170&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3",
      companyName: "Adobe",
      datePosted: "2 days ago",
      post: "UX Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://www.bing.com/ck/a?!&&p=70272ff24e7ea4bd55bb1c94dc6d30cf4ea6398b1821008e5baf47461eafc04dJmltdHM9MTc3NDQ4MzIwMA&ptn=3&ver=2&hsh=4&fclid=309da01a-e8ad-6dab-0e73-b63fe9556c3e&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbnRlbCtsb2dvJmlkPTlBM0NEQzRDNjQ1QjM5RDQxQzJGQUNDQzAxRjRDMTVBNjJDQTgzMzImRk9STT1JUUZSQkE",
      companyName: "Intel",
      datePosted: "3 weeks ago",
      post: "Hardware Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://www.bing.com/ck/a?!&&p=dc6f2e85d767218bae2f49664cc295d467184cdea3d639e9eaffc5264c6ee55fJmltdHM9MTc3NDQ4MzIwMA&ptn=3&ver=2&hsh=4&fclid=309da01a-e8ad-6dab-0e73-b63fe9556c3e&u=a1L2ltYWdlcy9zZWFyY2g_cT1zYWxlc2ZvcmNlK2xvZ28maWQ9NTcxNDIwODkxRjM5QkZGQTA4NDg3MDM0NzkwOENEREQ3N0M0NkYzMCZGT1JNPUlRRlJCQQ",
      companyName: "Salesforce",
      datePosted: "1 month ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$68/hr",
      location: "Dublin, Ireland"
    }
  ];



  return (
    <div className='parent'>
      {jobOpenings.map(function (ele, idx) {

        return <div key={idx}> <Card companyName={ele.companyName} post={ele.post} brandLogo={ele.brandLogo} datePosted={ele.datePosted} tag1={ele.tag1} tag2={ele.tag2} pay={ele.pay} location={ele.location} />
              </div>
      })}
    </div >
  )
}

export default App
