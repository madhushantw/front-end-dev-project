import React from 'react'
import Frame from './Components/Frame.jsx'

const Frames = () => {

    const framesData = [
        {
          header: "Web & Mobile App Development",
          body: "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.",
          image: "https://s3-alpha-sig.figma.com/img/7f59/6d31/c2149f00214af5481c570aeb1a76d7d3?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ExYgi7jaU8zaQrjBAJHhhI-Cl5VvwIrB8drLjr5GLpAEQTHK1Qgnh-sgoj8aITkdBsW78rH80VNmUHCimCgqpv7UVMMPZLrUvvampp2hMUJAQwmPdL4EzkfH0cYtP2YuSUIKUagy3Uamkt-AR7yX2Am-qSg21TA7HxcYZvXSrxDmGhRIDZWI1Xn2OVB2~KNvSYYnGkAkBv3S-4rT7uYKZb8V6fwKmU98UjSnXoLc~t-xZXBVFcmo3t1YWOs~hr8ys6MsZsl1NcpwMSRNXmNaAmzlzW2stn423YCjk8RHlo9QWPfPNc9DNmzXIom21FOUmCaMg1QUC-eXp-W3V1jpSg__"
        },
        {
          header: "Digital Strategy Consulting",
          body: "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.",
          image: "https://s3-alpha-sig.figma.com/img/a2c7/a630/be108bd31437b72eaae8e1dbd7abd910?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iqYZJ2iXqpHAuznh300cFnPAmV4KDef87cNUNZkmSlf9Ytzf-0ps70czX7AcJtGEPdJd6h~fvcJ6VffO8LMM1Q13Uqz0TiyBKx5IzhoIuQxM0Og2dc0mGtvHbQf7gzYdmSqMaf2BaDLPtpi9JCf0gz7fjhJRxUwBSg5Vm-6amxjAeI1WhFLcwiP8om9AsK6HPDKBwMdNSR4yOHF6WwI-xbqTUlk7pQVe7KXzYxDPDXwurLJIGHYU0QVNnzDAli5M0ffjajxTin5k-x-TCKy1uE2g3N8MOVY~~OQbzxdVPNQQLuIE8gOKpUqjg-KEE-ObHe55t5-vdhKU7ne9pTzj7g__"
        }
      ];

  return (
    <div>
        {framesData.map((frame, index) => (
            <Frame key={index} header={frame.header} body={frame.body} image={frame.image} reverse={index === 0? true:false}/>
        ))}
    </div>
  )
}

export default Frames