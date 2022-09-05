import Navbar from "../components/Navbar";
import blogSchema from "../data/blog";
import Footer from "../components/Footer";
import { Back } from "./CrushPost";

function PostHero() {
  return (
    <section className="text-section padding100 blog-title">
      <h1>{blogSchema[0].name}</h1>
      <hr />
    </section>
  );
}

function PostContent() {
  return (
    <section className=" post-content padding100">
      <p>
        In May 2021, I was the laziest I have ever been. Whole days were spent
        sitting, which caused a lot of back pain and excessive body Fat.
      </p>
      <p>
        So, to turn this situation around I decided to challenge myself to run
        100 kilometres in 30 days. Which to be honest, is not a huge distance.
        But for me, it meant a huge lifestyle change. Although I did not
        complete the 100k, (could manage 70K), but this journey taught me
        incredible things about life, habit formation and self-development in
        general.
      </p>
      <p>SO, here’s what I learned from trying to run 100k in 30 days.</p>
      <p>
        And remember, all of these ideas are about running and also not about
        running.
      </p>
      <br />
      <h2 id="slow-down-to-speed-up">Slow down to speed up</h2>
      <br />
      <p>
        With a new challenge comes a newfound excitement, which fades away
        quicker than my luck. And this new challenge’s excitement made me run
        far more than my body could handle, which lead to break down and not
        wanting to run.
      </p>
      <p>
        Oftentimes, our mission is to get to the destination as fast as
        possible, but we often forget that the joy is not in the destination,
        it’s in the journey.
      </p>
      <p>
        Running 100k wasn’t going to help me, running every day might. Since
        then, I have always try to pause periodically to reflect on my journey
        and to take it easy.
      </p>
      <blockquote>
        <p>
          <em>“If it not easy, does not mean it has to be too hard”</em>
        </p>
      </blockquote>
      <br />
      <h2 id="don-t-be-realistic">Don’t Be Realistic</h2>
      <br />
      <p>
        When you pick a new goal, being realistic is not the best idea. I have
        tried 50k challenges multiple times in past, but I could only run 20k
        that month.
      </p>
      <p>Why did I pick 50k? I chose to be realistic, Well, not this time.</p>
      <p>
        The target 100k Is obviously bigger than I had ever done, and I did not
        run the complete 100k. But this time, I pushed myself to 70k, which is
        far better than the 20k I did before. I failed the 100k challenge, but
        this time I FAILED 50K ahead of my older version.
      </p>
      <blockquote>
        <p>That’s the goal. To fail forward.</p>
        <p>
          “You don’t know how strong you are until being strong is the only
          option”
        </p>
      </blockquote>
      <br />
      <h2 id="if-you-can-t-do-the-run-you-want-to-do-the-run-you-can">
        If you can’t do the run you want to, do the run you can
      </h2>
      <br />
      <p>
        Nature’s first rule is to test your determination. Every time you try
        something new, you will find that everyone and everything around you is
        an obstacle. When I started this challenge, it started raining. My
        freelance workload increased, online course timings changed to the time
        I had blocked to run.
      </p>
      <p>
        Even when you try to do something that makes you uncomfortable, you
        might have noticed the sudden increase in work and all other external
        obligations. And there is so much we cannot control, but the few things
        that we can are extremely important. I could not control the rain, but I
        can control myself. “Do what you can, where you are, with what you
        have”.
      </p>
      <p>
        We all play the zero-sum game, that either I will do it completely or
        not at all, whereas this is not ideal. You can’t control the things
        around you, but you can control how you respond to them.
      </p>
      <p>Sometimes you can’t do the run you want to, do the run you can.</p>
      <p>Run for 5 mins, but run.</p>
      <br />
      <h2 id="don-t-underestimate-or-abuse-your-body">
        Don’t underestimate or abuse your body
      </h2>
      <br />
      <p>
        When you start running, you make either of these two mistakes. Either
        you do too much or you do too little. Do yourself a favour, and don’t
        fall for any of these.
      </p>
      <p>
        You deserve better. When you start something new, there is a voice
        inside your brain asking you to stop.
      </p>
      <p>DON’T LISTEN</p>
      <p>
        This is resistance trying to pull you down. Your brain was made to
        survive, you have to train it to thrive.
      </p>
      <p>
        Similarly, when you are deep into the habit of running, You get addicted
        to it (at least me)
      </p>
      <p>
        So, even when your body needs rest, There is still a voice asking you to
        continue And this is when things get tricky, This is when you have to
        know the difference between discipline and getting hurt.
      </p>
      <blockquote>
        <p>
          Have the courage to know when to start and the wisdom to know when
          it’s the time to stop.
        </p>
      </blockquote>
      <br />
      <h2 id="recover">Recover</h2>
      <br />
      <p>This is probably the most overlooked part of running and life.</p>
      <p>
        When we are young, relaxing and taking a break is looked down on. But
        you don’t realise that, While everyone is working hard, the person who
        wins is the one who has the same energy to work hard the next morning
        and beyond.
      </p>
      <p>
        This is where recovery comes in, to take a step back so that we can take
        two steps forward. So, rest, recover and come back stronger.
      </p>
      <br />
      <h2 id="forgive-yourself">Forgive yourself</h2>
      <br />
      <p>
        Some days, you just don’t feel like running. But then this guilt kicks
        in and makes your life miserable. At these moments, remember that’s okay
        to skip a day.
      </p>
      <p>
        We are humans, not machines, we can always get back at it tomorrow. Just
        don’t skip two days in a row.
      </p>
      <br />
      <h2 id="don-t-try-to-run-every-day-try-to-be-a-runner">
        Don’t try to run every day, try to be a runner
      </h2>
      <br />
      <p>
        The reason we give up on making new habits is that we try to change the
        outcome, not the identity. And a good example of this from atomic habits
        would be,
      </p>
      <p>
        Suppose we both were addicted to cigarettes and we are trying to quit
        smoking. And at a party, we are offered cigarettes, and I say, “No
        thanks, I am trying to quit smoking”. Seems like a normal response.
        right?
      </p>
      <p>
        On the other hand, you respond by saying, “No thanks, I am not a smoker
        anymore”. Notice, how such a small change of words makes such a huge
        difference, I was trying to change the outcome, you are trying to change
        your identity.
      </p>
      <p>
        So, if I wanted to build the habit of running, running 100k would be
        changing outcomes but running every day would be changing my identity.
        And even better, I don’t have to force myself to run, I just have to be
        a runner. And what does a runner do?
      </p>
      <p>they run.</p>
      <p>Try to change your identity, not the outcomes.</p>
      <p>
        The goal of this challenge was to build consistency with running, and I
        somewhat achieved that, So, if you are planning a challenge of your own,
        I would love to hear about it. Until Next Time, Pushkar Singh.
      </p>
    </section>
  );
}

function CrushPost() {
  return (
    <main className="post-page">
      <Navbar />
      <Back />
      <PostHero />
      <PostContent />
      <Footer />
    </main>
  );
}

export default CrushPost;
