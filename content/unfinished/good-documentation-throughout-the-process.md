
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