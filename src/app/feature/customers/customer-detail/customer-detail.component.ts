import { Customer } from './../customer-data/customer';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/core/service/customer.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  id: number;
  customer: Customer;
  // customer$: Observable<Customer>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private location: Location
  ) { }

  ngOnInit(): void {
    // 由于 ngOnInit() 在每个组件实例化时只会被调用一次，
    // 所以你可以使用 paramMap 可观察对象来检测路由参数在同一个实例中何时发生了变化。
    this.route.paramMap.pipe(
      // switchMap 操作符做了两件事。它把 HeroService 返回的 Observable<Hero> 拍平，
      // 并取消以前的未完成请求。当 HeroService 仍在检索旧的 id 时，
      // 如果用户使用新的 id 重新导航到这个路由，switchMap 会放弃那个旧请求，并返回新 id 的英雄。
      switchMap(params => {
        this.id = Number(params.get('id'));
        return this.customerService.getCustomer(this.id);
      })
    ).subscribe((data) => this.customer = data);

    // TODO snapshot：当不需要 Observable 时的替代品
    // 假如你很确定这个 HeroDetailComponent 实例永远不会被重用，你可以使用 snapshot。
    // route.snapshot 提供了路由参数的初始值。 你可以通过它来直接访问参数，
    // 而不用订阅或者添加 Observable 的操作符
    // const seletedId = +this.route.snapshot.paramMap.get('id');
    // this.customerService.getCustomer(seletedId).subscribe(data => this.customer = data);
  }

  goBack(): void {
    //
    // this.location.back();
    this.router.navigate(['customers']);
  }

  goBackWithParam(): void {
    this.router.navigate(['/customers', { id: this.id, foo: 'foo' }]);
    // this.router.navigate(['../../../customers', this.id], {relativeTo: this.route});
  }
}
