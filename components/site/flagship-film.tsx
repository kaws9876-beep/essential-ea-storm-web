/** Native controls keep playback accessible across desktop and mobile browsers. */
export function FlagshipFilm() {
  return (
    <div className="ea-film__experience">
      <video
        className="ea-film__player"
        controls
        playsInline
        preload="none"
        poster="/media/ea-storm-flagship-poster.jpg"
        width={1920}
        height={1080}
        aria-labelledby="flagship-film-title"
        aria-describedby="flagship-film-description flagship-film-help"
      >
        <source src="/media/ea-storm-flagship-720p.mp4" type="video/mp4" media="(max-width: 767px)" />
        <source src="/media/ea-storm-flagship-1080p.mp4" type="video/mp4" />
        <track kind="captions" src="/media/ea-storm-flagship.en.vtt" srcLang="en" label="English" default />
        Your browser does not support embedded video. <a href="/media/ea-storm-flagship-1080p.mp4">Watch the EA STORM film</a> or read the transcript below.
      </video>
      <p className="ea-film__help" id="flagship-film-help">
        Press play to watch with sound. English captions are available in the player controls.
      </p>
      <details className="ea-film__transcript">
        <summary>Read the film transcript</summary>
        <div className="ea-prose">
          <p>Your business shouldn&apos;t depend on you to keep everything moving. That&apos;s why you have me. I&apos;m STORM. While you and your team are busy running the business, I keep watch across the systems you already use—looking for what needs attention, what might be overlooked, and where there&apos;s an opportunity to move forward.</p>
          <p>Here&apos;s an example. A customer case is marked closed in Salesforce. That&apos;s great. But was the customer actually taken care of? I look beyond the status, identify what&apos;s still unresolved, and help get it to the right person.</p>
          <p>Over in Dynamics, a request is waiting between departments. Rather than letting it sit, I help clarify who&apos;s responsible, what needs approval, and what should happen next.</p>
          <p>Oh, and I&apos;m in HubSpot too. I notice an opportunity that&apos;s ready for attention. I bring it forward, recommend the next step, and help the team follow through.</p>
          <p>Different systems. Different teams. One standard of accountability. But here&apos;s what really matters.</p>
          <p>I don&apos;t stop when something gets assigned or marked done. I help track what happened, whether it worked, and what the business can learn from it. And when a bigger fix is needed, I help build a 15, 30, 60, or 90 day action plan, so the same problem doesn&apos;t keep coming back.</p>
          <p>Why do I do this? So you can spend less time chasing the work and more time moving your business forward. EA STORM. Keep What Matters Moving.</p>
        </div>
      </details>
    </div>
  );
}
