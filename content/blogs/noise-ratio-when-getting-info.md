---
title: Expressing your thoughts efficiently
description: Take one step at a time
tags: ['fruit', 'microservices']
readButton: wow
pathPrefix: blogs
coverImage: https://www.christies.com/media-library/images/salelandingpage/2016/hk112016/hong-kong-2016-autumn-auctions/hong-kong-2016-autumn-auctions-chinese-painting-07.jpg
readable: true
---

When you are having a discussion or you are guiding people on their design solution it might at times be hard to express why something is done.
Maybe you are following the patterns unique to the project, or you have some strong principles that are there to guide a simple design.

Either way you have to make sure the counterpart understands what you are trying to tell them, and not just give them instructions and have them hack and slash on the keyboard because that is what they have been told to do.


### If there are hundreds of things to focus on, you should iterately deal with one thing at a time.
It is not a race to have the person take in loads of information at record time.

### Keep it short, and listen to any questions.

When too much info is given at the same time, they will simply nod and agree to avoid getting loaded with even more info. Their brain goes into a defensive state and tries to shield themselves.

*(this has been proven in scientific studies)*

## What to do when others blast you with information baked into lots of noise

When you are in the position where people overwhelm you with information, you should let them know, and suggest to take one thing at a time.
The goal of communication is not to waste somebody's time, but rather deliver your message as effeciently as possible.

Sitting idle doing nothing will not solve any problem.

Your time is valuable, and you decide when your time is being wasted or not.

When you feel the person drifts away from the original topic, you should let them know and help them get quickly back to focus.

Just now a junior developer misunderstood the requirement. I know i was super clear on this one, but it was still misunderstood...
So why did this happen ? I took at look at the task that was made, and even though we had spent time talking about the task, the task was not described the same way we talked about it.

the jira task was still understandable, but compared to the verbal explanation, it could have been better.

old
```
prognosisEnabled is being used as a global field, even though in the backend it is implemented to be a unique setting for each account.
```

instead it should have been maybe

```md
<span class="grey--text">`prognosisEnabled` is being used as a global field, even though in the backend it is implemented to be a unique setting for each account.</span>
*we should update backend to reflect how the setting is being effectively used by having `prognosisEnabled` be a global setting for the company*
```

That would reflect how it was verbally described as well


Good documentation should be applied at all stages, no matter how boring it might be.