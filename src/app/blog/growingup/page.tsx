import "@/app/globals.css";
import { formatDate } from "@/app/utilities/common";

export default function GrowingUp() {
  return (
    <main className="content flex flex-col gap-y-12">
      <div className="flex flex-col items-center text-center">
        <div
          className="font-stkaiti text-4xl"
          style={{ color: "var(--color-header)", opacity: 0.7 }}
        >
          长大
        </div>
        <div
          className="font-stkaiti text-lg mt-2"
          style={{ color: "var(--color-header)", opacity: 0.7 }}
        >
          {formatDate(new Date(2023, 11, 18), "zh-Hans-CN")}
        </div>
      </div>
      <div className="prose max-w-[800px] mx-auto font-stkaiti text-lg leading-relaxed">
        <blockquote className="flex items-start gap-x-4 mb-8">
          <span
            className="w-[3px] opacity-30 self-stretch"
            style={{ backgroundColor: "var(--color-body)" }}
          ></span>
          <div className="text-xl font-stkaiti opacity-70">
            长大的含义是什么呢
          </div>
        </blockquote>

        <p className="indent-4 md:indent-8">四年零三个月，我从大学毕业了。</p>

        <p className="indent-4 md:indent-8">
          我相信人是有命数的，回头看看，我自认为是幸运的。毕竟是非曲直，吉凶祸福，在不同的当下，从不同的视角，都会有不同的认知。
        </p>

        <p className="indent-4 md:indent-8">
          我是一个逻辑自洽却不能情感自洽的人。面对很多人情世故，面对最平凡的亲人、朋友，最平常不过的见面、别离，我都不知道我该以什么模样出现，用什么语气，做什么行为。我害怕和曾经最亲近的人需要重新从陌生开始培养，因为那太不现实又不公平了。人生没有那么多十年，只有不再主动联系，才不会面对失去。所以我特别感谢，感恩，如果有再次见面的那一刻，对方可以把我拉回当年安全又熟悉的感觉。一切有关人与人的事情，我都需要看起来更加冷酷的理性赋予它逻辑，来让我在每一种情感下的每一个行为都更加合理。对我来说，那似乎是上天的指引。我的字典里没有“后悔”和“遗憾”这两个词，不是因为我的冷漠决绝，而是它们不符合我的逻辑。我的每一个决定都是在那个当下的选择，是中和了我所有的情感和理性做出的最适合当时的那个我的选择，即使站在未来看过去，可能结果不是世俗之见的好，但我没有经历过也不会经历如果，当然也没有办法确定另外一个选项带给我的，会是这另一条路上更美好的人生，而不是精神或物质上的透支。所以我相信，我注定要成为这样的人，注定要经历这些事情。
        </p>

        <p className="indent-4 md:indent-8">
          我从小就知道我与大部分人不同，不同的地方在于我的父母对我的期待并不是成为一个普通人，我应该，也希望自己可以回应他们的付出。他们当然希望我健康快乐，但他们在我身上倾注了毕生的心血，挖掘我的潜力，不断把我推到更高的平台上，让我获得更广阔的视野和更全面的见识。我知道这不是一个普通家庭，或者是一个有普通见识和普通期待的家庭可以做到的。正因为这样，我很珍惜，也格外小心。我偶尔会和朋友打趣说，我的政治就是《抵制诱惑》这一课学得特别好。是事实，也因为是事实，我才清楚地记得这一课。10岁的时候，妈妈让爸爸带我去看电影，一部教育片。到电影院之后，我看到屏幕上写着“儿童节特别上映：《白雪公主之魔镜魔镜》”，我说我想看这个，爸爸让我自己选。我想了想，觉得能够自己选择快乐的机会太过来之不易，于是选了白雪公主。那天的白雪公主，不够好看。我知道，爸爸也觉得不够好看。回去之后，妈妈问我电影怎么样，我说我看了白雪公主。我不假思索的坦诚是想要她骂我一顿的，不过其实我根本没有看进去白雪公主。我一边亏欠于爸爸的陪伴，他本可以把他的时间用来看他更喜欢的电影，一边觉得辜负了父母的培养，竟然把60多块钱浪费在一时的“快乐”而不是更持久的教育上。
        </p>

        <p className="indent-4 md:indent-8">
          虽然当年小孩子的想法太过非黑即白，但当时的我也一下子明白，我不应该羡慕其他小孩子可以放学后到公园里玩，可以和朋友一起去逛小卖部和文具店，没有那些所谓快乐的事情，我一样可以快乐地长大。我更不应该过于迫切地试图去够到那些快乐，因为那样会让我背负太多对快乐的期待，然后失去快乐。从那之后，即使我有了选择的权力，我也不会主动去买好看的文具，吃膨化食品，买漂亮的衣服，因为他们将要承载的是我压抑了多年的沉重的期待，如果没有这些身外之物，我会更加轻松快乐，也将永远没有失望。我的记性很不好，但那个下午，这部白雪公主，这个在山西剧院发生的爸爸妈妈都不再记得的事情，却是我会铭记一生的教训。
        </p>

        <p className="indent-4 md:indent-8">
          我崇尚天赋，不喜欢努力。小升初的时候，大家忙着上补课班，参加比赛，提前和中学签约。我也一样，被时代推到了漩涡里，为了给奥数、国学、英语腾出时间，我几乎放弃了所有的兴趣班，辗转在竞赛课和考场之间。后来想想，当时只是一个懵懂的机器，如果目标只是进最好的中学，我根本不需要放弃这么多，做这么多努力。所幸，我竟然顺应了自己的天赋，我过度的付出，得到了过度的回报。是数学让我遇到了这一届最如鱼得水的几十个人，和他们一起挣脱出来，游到了岸上，甚至兜兜转转在高中进入了一个班。可惜的是，当橄榄枝抛出，所有的资源都砸向我的时候，站在山顶上，曾经拥有那么多选择的我，却没能说一句：这是我想要的一方天地。这条路我没有走完，我做了逃兵。如果下辈子我生得纤细、修长，我要做一个民族舞舞者，用身体去表达故事，活在舞剧里。
        </p>

        <p className="indent-4 md:indent-8">
          来到大学之后，我又发现自己是幸运的，我来到了一个要自己去抢资源的学校。人人唾弃的专业申请制度成为了我脱颖而出的跳板，补足了高中申请大学时信息不对称和英语阅读能力不足给我带来的选校的弊端。毫无疑问，在两节千人的计算机先修课上，我几乎不费力地在期中考试中拿到满分，在根本没有认真思考的结课游戏中获得第三名。可是疫情爆发了，第二节课的期末取消，作业分的比重翻倍，平时不屑于花时间抠代码格式的我，拿了个不痛不痒的3.7。骨子里的骄傲是很难磨平的，我没有像其他人一样继续上更高阶的非专业课，向计算机系的老师证明我的能力足以在更有难度的课上拿到高分，而是清楚地冒着竞争力减弱的风险，选择了更感兴趣的课，因为我不认为我应该用我的时间为疫情买单。意料之中，我被拒了，不过我喜欢棱角，这并不能让我对现实屈服。我掂量了一下最难进的专业，一转头，去学商了。无心插柳柳成荫，我总是在意想不到的地方走得很顺，在自己想走的路上磕磕绊绊的。不过我之所以幸运，是因为不管走多少弯路，我总能到达想去的地方。我先是一股脑儿进了商学院，又在第二次申请中进了计算机。所以啊，人生是注定的，我是这样的性格，做出那样的选择，又在适当的时机遇上了天灾人祸，让我拥有了弱点，却打出了最强的牌。
        </p>

        <p className="indent-4 md:indent-8">
          这两年美国找工市场不好，对应届毕业生更是雪上加霜。我看到太多人抓狂、焦虑、抑郁，感叹自己生不逢时，怀才不遇。主观上，我是不理解的。我也曾经想过，如果当年第一次申请就可以进系，我可能会提前毕业，赶上市场最好的年份。可是没有如果。那些焦虑的大部分人应该从来没有体验过失业的感觉吧，既然没有体验过，怎么知道失业就一定不好呢。我的妈妈也是学计算机的，她见证了计算机的兴起，而我们见证了它的衰落。也许时代的红利真的不在了，所以有一只无形的推手在告诉我们，不准偷懒，要去引领新的时代了。对我来说，计算机是我现在适合也想做的事，但并不一定是我全部的天赋所在，或许在这里及时止损，真的可以发现新的方向。但无论有多磕磕绊绊，我总能到达想去的地方，我赶上了这趟末班车。在时间的长河里，是幸运还是不幸，我无法给出定论。但是我想说，永远留有后手，永远心存希望，是我心里的那束光没有黯淡的原因，也是我找寻满足和幸福的方向。
        </p>

        <p className="indent-4 md:indent-8">
          现在我也会买快乐了，因为我不知道怎样去计较得失，事情的正反面要用人心和时间来证明。我生不带来死不带去，自己就是完整的个体，不需要任何对身外之物的期待。愿我可以保护灵魂的自由，顺应它的想法，感受它的喜怒哀乐。每个人都比故事中的自己更加复杂。了解自己，向前走，去经历，是我要用一生来做的课题。
        </p>
      </div>
      <div className="flex flex-col items-center text-center mt-20">
        <div
          className="font-stylish text-4xl"
          style={{ color: "var(--color-header)", opacity: 0.7 }}
        >
          Growing Up
        </div>
        <div
          className="font-stylish text-lg mt-2"
          style={{ color: "var(--color-header)", opacity: 0.7 }}
        >
          {formatDate(new Date(2023, 11, 18))}
        </div>
        <span className="mt-2 font-bold">[Translated by AI. Don't read]</span>
      </div>
      <div className="prose max-w-[800px] mx-auto font-stylish text-lg leading-relaxed">
        <blockquote className="flex items-start gap-x-4 mb-8">
          <span
            className="w-[3px] opacity-30 self-stretch"
            style={{ backgroundColor: "var(--color-body)" }}
          ></span>
          <div className="text-xl font-stylish opacity-70">
            What does it mean to grow up?
          </div>
        </blockquote>

        <p className="indent-4 md:indent-8">
          After four years and three months, I graduated from university. I
          believe that people have their own destinies. Looking back, I consider
          myself lucky. Right and wrong, fortune and misfortune — every moment,
          every perspective, brings a different understanding.
        </p>

        <p className="indent-4 md:indent-8">
          I’m someone who is logically consistent but emotionally inconsistent.
          When it comes to human relationships — the most ordinary encounters,
          the most familiar family and friends, the most commonplace meetings
          and farewells — I often don’t know how I should appear, what tone to
          take, or what actions to perform. I fear having to rebuild intimacy
          with people I was once closest to, because starting from strangers
          again feels both impossible and unfair. Life doesn’t have that many
          decades; only by not initiating contact can I avoid loss. So I am
          especially grateful that, when reunion does happen, the other person
          can pull me back to that safe and familiar feeling from the past.
        </p>

        <p className="indent-4 md:indent-8">
          For me, everything involving human interaction needs to be governed by
          cold, rational logic — to make each emotion and every action feel
          reasonable. It seems like a kind of divine guidance. My dictionary
          doesn’t include “regret” or “remorse,” not because I’m indifferent or
          decisive, but because those words don’t fit my logic. Every choice I
          make is the one that, in that moment, balances all my emotions and
          reason to best suit who I am at that time. Even if, looking back from
          the future, the outcome isn’t what society would call “good,” I’ve
          never experienced the alternative, and I cannot know if a different
          choice would have led to a better life — or only to emotional or
          material exhaustion. So I trust that I am meant to be this way, and
          that I am meant to experience what I have.
        </p>

        <p className="indent-4 md:indent-8">
          From a young age, I knew I was different from most people. My parents
          didn’t expect me to be ordinary, and I hoped I could honor their
          investment in me. They wanted me to be healthy and happy, of course,
          but they also poured themselves into discovering my potential, pushing
          me to higher platforms, and giving me broader perspectives and richer
          experiences. I know this isn’t something a typical family, or one with
          ordinary expectations, could achieve. I treasure it, and I proceed
          cautiously.
        </p>

        <p className="indent-4 md:indent-8">
          I sometimes joke with friends that my “politics” comes from mastering
          the lesson of resisting temptation. It’s true, and because it is, I
          remember this lesson vividly. When I was ten, my mother had my father
          take me to the cinema for an educational film. But at the theater, the
          screen said: “Children’s Day Special: Snow White and the Magic
          Mirror.” I told my father I wanted to watch that instead. He let me
          choose. I realized that the opportunity to choose my own happiness was
          rare, so I picked Snow White. That day, Snow White wasn’t very good —
          I knew my father thought so too. Later, my mother asked how the film
          was. I said I watched Snow White. Without thinking, I spoke honestly,
          expecting perhaps a scolding — though I hadn’t really watched it at
          all. I felt guilty for taking my father’s time for something he might
          not have enjoyed, and for wasting my parents’ careful planning,
          spending sixty-something yuan on fleeting “happiness” instead of
          lasting education.
        </p>

        <p className="indent-4 md:indent-8">
          Even if my ten-year-old mind was rigidly black-and-white, I
          immediately understood I shouldn’t envy other children for going to
          parks or wandering stores after school. I could grow up happy without
          those things. Nor should I chase happiness too eagerly — to do so
          would load me with expectations and take the joy from me. From then
          on, even when I could make choices, I avoided buying fancy stationery,
          snacks, or pretty clothes. Those items would carry the weight of years
          of suppressed expectation; without them, I could be lighter and
          genuinely happy. My memory is poor, but that afternoon, that Snow
          White film, that moment in Shanxi Theater that my parents no longer
          remember — it became a lesson I carry for life.
        </p>

        <p className="indent-4 md:indent-8">
          I admire talent, and I dislike effort for effort’s sake. In middle
          school, while everyone else attended extra classes, competitions, and
          signed early deals with schools, I was swept into the same current. To
          free time for math competitions, hannotate classics, and English, I
          gave up nearly all my hobbies, shuttling between contests and exams.
          Looking back, I realize I was just a naive machine — if my goal had
          only been the best middle school, I didn’t need to give up so much.
          Fortunately, I followed my natural talent; the extra effort brought
          extraordinary reward. Math introduced me to dozens of people who were
          equally in their element, and together we broke free, eventually
          landing in a high school class I fit in with.
        </p>

        <p className="indent-4 md:indent-8">
          Yet when opportunities arose, when resources rained down on me, I
          didn’t declare: “This is the life I want.” I fled instead. If I am
          reborn with a slender, tall body, I want to be a classical dancer,
          expressing stories with my body, living in dance.
        </p>

        <p className="indent-4 md:indent-8">
          At university, I realized again how lucky I am. I came to a school
          where I had to fight for my own resources. The widely-criticized major
          application system became a platform for me to stand out, compensating
          for the information and reading gaps I had in high school. In large,
          impersonal computer science classes, I achieved top marks with little
          effort. Yet when COVID hit, finals were canceled, assignments counted
          double, and I, someone who never fussed over formatting code, ended up
          with a 3.7 GPA. Proud as I am by nature, I didn’t chase harder CS
          classes to prove my ability — I risked some competitiveness to pursue
          what interested me. I didn’t conform, but I kept my edges. I measured
          the hardest program, then pivoted to business. Serendipitously, things
          went smoothly, and I eventually entered both the business school and,
          on a second try, the computer school. Life seems destined — I make the
          choices I do, encounter disasters and luck at the right moments, and
          somehow arrive at where I need to be.
        </p>

        <p className="indent-4 md:indent-8">
          The U.S. job market has been difficult these past two years,
          especially for graduates. I see people anxious, depressed, blaming
          timing or fate. I cannot fully relate. Some imagine that, had they
          graduated earlier, they would have landed a better year. But there is
          no “if.” Many who panic may never have experienced unemployment — if
          you haven’t, how can you know it is truly bad? My mother witnessed
          computing rise; we have seen it decline. Perhaps the era of easy
          dividends is over. A hidden force pushes us to lead a new era, not
          slack off. For me, computer science suits me now, but may not define
          all my talent. Even if I stumble, I can find a new direction. Despite
          the bumps, I arrive where I want to go — I catch the last train.
          Whether this is lucky or not, I cannot say. But leaving room for
          contingency, holding hope, keeps my inner light alive, guiding me
          toward fulfillment.
        </p>

        <p className="indent-4 md:indent-8">
          Now, I can buy my own happiness, because I no longer measure gains and
          losses. Life proves itself in time and experience. We arrive with
          nothing and leave with nothing — I am complete on my own, needing
          nothing external to fulfill me. May I protect my soul’s freedom,
          follow its desires, and feel its joy and sorrow. Everyone is far more
          complex than the story of themselves. To understand oneself, move
          forward, and experience — this will be my lifelong course.
        </p>
      </div>
    </main>
  );
}
